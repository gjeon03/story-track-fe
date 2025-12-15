// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  GenerateImageInfo,
  GenerateResponse,
  GenerateResponseItem,
} from "@/hooks/mutations/use-generate-mutation";
import { GoogleGenerativeAI } from "@google/generative-ai";
import type { NextApiRequest, NextApiResponse } from "next";
import { getPrompt } from "@/utils/language-prompts";

const apiKeyGenAI = process.env.GOOGLE_GENERATIVE_AI_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateResponse | { error: string }>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    imgInfo,
    ogText,
    languageIndex = 0,
  }: {
    imgInfo: GenerateImageInfo[];
    ogText: string;
    languageIndex?: number;
  } = req.body;

  if (!apiKeyGenAI) {
    return res
      .status(500)
      .json({ error: "Missing API key for Google Generative AI" });
  }

  const generativeAi = new GoogleGenerativeAI(apiKeyGenAI);
  const model = generativeAi.getGenerativeModel({
    model: "gemini-2.0-flash-lite",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT" as any,
        properties: {
          title: {
            type: "STRING" as any,
          },
          content: {
            type: "STRING" as any,
          },
        },
        required: ["title", "content"],
      },
    },
  });

  try {
    const sortedImgInfo = imgInfo.sort(
      (a, b) => new Date(a.imgDtm).getTime() - new Date(b.imgDtm).getTime(),
    );

    // Generate responses using Google Generative AI
    const generateContent = async (type: string) => {
      const imageInfo = sortedImgInfo
        .map((img, index) => `Image ${index + 1}: Date: ${img.imgDtm}`)
        .join("\n");

      const dynamicPrompt = getPrompt(languageIndex, "blogGeneration", {
        content: ogText,
        imageInfo: imageInfo,
      });

      const prompt = `
        ${dynamicPrompt}

        ### Additional Instructions:
        - Write a detailed and beautifully formatted blog post in JSON format with the following fields:
          - title: The title of the blog post
          - content: A markdown-formatted description of at least 2000 characters.
        - The blog content should NOT include any geographic coordinates.
        - Use markdown creatively, including headers (#, ##, ###), bullet points (*, -), bold text (**), italic text (*), and blockquotes (>) where appropriate.
        - Add visual elements like emojis 🎉, 🌟, or 📸 to make the blog post more engaging and visually appealing.
        - Follow a chronological narrative based on the image information and the provided context.
        - Each section should feel cohesive, connecting moments and transitions naturally.
        - Respond ONLY in plain JSON format without wrapping it in code blocks (e.g., \`\`\` or \`\`\`json).

        ### Image Information:
        ${imageInfo}

        Ensure that the JSON output strictly follows this format:
        {
          "title": "Blog Post Title",
          "content": "Markdown formatted content here..."
        }

        If you cannot generate the output in this exact JSON format, respond with: {"title": "", "description": ""}.
        `;

      const result = await model.generateContent(prompt);

      const text = result.response.text() || "Unable to generate content.";

      console.log(`Generated content for ${type}:`, text);
      try {
        const cleanedText = text.replace(/```json\n?|```\n?/g, "").trim();

        const json = JSON.parse(cleanedText);

        return {
          title: json.title || "Untitled",
          content: json.content || "No description available.",
        } as GenerateResponseItem;
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        console.error("Raw text:", text);
        return {
          title: `${type} Blog Post`,
          content: "Failed to generate valid JSON content.",
        };
      }
    };

    const [genRes1, genRes2, genRes3] = await Promise.all([
      generateContent("Type 1"),
      generateContent("Type 2"),
      generateContent("Type 3"),
    ]);

    const result: GenerateResponse = { genRes1, genRes2, genRes3 };
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error generating blog content:", error);
    return res.status(500).json({ error: "Failed to generate blog content" });
  }
}
