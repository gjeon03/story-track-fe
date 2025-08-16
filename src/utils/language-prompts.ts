export interface LanguageConfig {
  code: string;
  name: string;
  prompts: {
    blogGeneration: string;
    imageAnalysis: string;
    contentSummary: string;
  };
}

export const LANGUAGE_CONFIGS: LanguageConfig[] = [
  {
    code: 'ko',
    name: '한국어',
    prompts: {
      blogGeneration: `당신은 전문적인 블로그 작성자입니다. 주어진 이미지와 텍스트를 바탕으로 매력적이고 정보성 있는 블로그 포스트를 작성해주세요.

다음 요구사항을 충족해주세요:
- 자연스럽고 읽기 쉬운 한국어로 작성
- 이미지의 내용과 텍스트가 조화롭게 어우러지도록 구성
- 독자의 관심을 끌 수 있는 제목과 본문
- 적절한 단락 구성과 흐름

작성할 내용: {content}
이미지 정보: {imageInfo}`,
      
      imageAnalysis: `이미지를 자세히 분석하고 한국어로 설명해주세요. 다음 사항들을 포함해주세요:
- 이미지의 주요 내용과 구성 요소
- 색감, 분위기, 스타일
- 눈에 띄는 특징이나 디테일
- 이미지가 전달하는 메시지나 감정`,
      
      contentSummary: `다음 내용을 한국어로 간결하고 명확하게 요약해주세요:
- 핵심 메시지 3-5개 문장으로 정리
- 중요한 키워드 강조
- 읽기 쉬운 구조로 정리

요약할 내용: {content}`
    }
  },
  {
    code: 'en',
    name: 'English',
    prompts: {
      blogGeneration: `You are a professional blog writer. Create an engaging and informative blog post based on the provided images and text.

Please meet the following requirements:
- Write in natural, easy-to-read English
- Harmoniously integrate image content with the text
- Create compelling titles and body content that captures readers' interest
- Use appropriate paragraph structure and flow

Content to write about: {content}
Image information: {imageInfo}`,
      
      imageAnalysis: `Please analyze the image in detail and describe it in English. Include the following aspects:
- Main content and components of the image
- Color scheme, mood, and style
- Notable features or details
- Message or emotion conveyed by the image`,
      
      contentSummary: `Please summarize the following content concisely and clearly in English:
- Organize key messages in 3-5 sentences
- Emphasize important keywords
- Structure for easy reading

Content to summarize: {content}`
    }
  },
  {
    code: 'ja',
    name: '日本語',
    prompts: {
      blogGeneration: `あなたはプロのブログライターです。提供された画像とテキストに基づいて、魅力的で情報性のあるブログ投稿を作成してください。

以下の要件を満たしてください：
- 自然で読みやすい日本語で作成
- 画像の内容とテキストが調和するように構成
- 読者の関心を引くタイトルと本文
- 適切な段落構成と流れ

作成する内容：{content}
画像情報：{imageInfo}`,
      
      imageAnalysis: `画像を詳細に分析し、日本語で説明してください。以下の点を含めてください：
- 画像の主な内容と構成要素
- 色合い、雰囲気、スタイル
- 目立つ特徴や詳細
- 画像が伝えるメッセージや感情`,
      
      contentSummary: `以下の内容を日本語で簡潔かつ明確に要約してください：
- 核心メッセージを3-5文で整理
- 重要なキーワードを強調
- 読みやすい構造で整理

要約する内容：{content}`
    }
  },
  {
    code: 'zh',
    name: '中文',
    prompts: {
      blogGeneration: `您是一位专业的博客作者。请根据提供的图片和文本，创作一篇引人入胜且富有信息性的博客文章。

请满足以下要求：
- 使用自然易读的中文撰写
- 让图片内容与文本和谐融合
- 创作吸引读者的标题和正文
- 使用适当的段落结构和流程

撰写内容：{content}
图片信息：{imageInfo}`,
      
      imageAnalysis: `请详细分析图片并用中文描述。请包含以下方面：
- 图片的主要内容和组成元素
- 色调、氛围和风格
- 突出的特征或细节
- 图片传达的信息或情感`,
      
      contentSummary: `请用中文简洁明确地总结以下内容：
- 用3-5句话整理核心信息
- 强调重要关键词
- 结构清晰易读

要总结的内容：{content}`
    }
  },
  {
    code: 'es',
    name: 'Español',
    prompts: {
      blogGeneration: `Eres un escritor de blogs profesional. Crea una publicación de blog atractiva e informativa basada en las imágenes y el texto proporcionados.

Por favor, cumple con los siguientes requisitos:
- Escribe en español natural y fácil de leer
- Integra armoniosamente el contenido de la imagen con el texto
- Crea títulos y contenido corporal convincentes que capturen el interés de los lectores
- Usa estructura de párrafos y flujo apropiados

Contenido sobre el que escribir: {content}
Información de la imagen: {imageInfo}`,
      
      imageAnalysis: `Por favor, analiza la imagen en detalle y descríbela en español. Incluye los siguientes aspectos:
- Contenido principal y componentes de la imagen
- Esquema de colores, estado de ánimo y estilo
- Características o detalles notables
- Mensaje o emoción transmitida por la imagen`,
      
      contentSummary: `Por favor, resume el siguiente contenido de manera concisa y clara en español:
- Organiza los mensajes clave en 3-5 oraciones
- Enfatiza las palabras clave importantes
- Estructura para fácil lectura

Contenido a resumir: {content}`
    }
  },
  {
    code: 'fr',
    name: 'Français',
    prompts: {
      blogGeneration: `Vous êtes un rédacteur de blog professionnel. Créez un article de blog attrayant et informatif basé sur les images et le texte fournis.

Veuillez respecter les exigences suivantes :
- Rédigez en français naturel et facile à lire
- Intégrez harmonieusement le contenu de l'image avec le texte
- Créez des titres et du contenu corporel convaincants qui captent l'intérêt des lecteurs
- Utilisez une structure de paragraphe et un flux appropriés

Contenu à rédiger : {content}
Informations sur l'image : {imageInfo}`,
      
      imageAnalysis: `Veuillez analyser l'image en détail et la décrire en français. Incluez les aspects suivants :
- Contenu principal et composants de l'image
- Palette de couleurs, ambiance et style
- Caractéristiques ou détails notables
- Message ou émotion transmis par l'image`,
      
      contentSummary: `Veuillez résumer le contenu suivant de manière concise et claire en français :
- Organisez les messages clés en 3-5 phrases
- Mettez l'accent sur les mots-clés importants
- Structurez pour une lecture facile

Contenu à résumer : {content}`
    }
  }
];

export const getLanguageConfig = (languageIndex: number): LanguageConfig => {
  return LANGUAGE_CONFIGS[languageIndex] || LANGUAGE_CONFIGS[0]; // 기본값은 한국어
};

export const getPrompt = (languageIndex: number, promptType: keyof LanguageConfig['prompts'], variables: Record<string, string> = {}): string => {
  const config = getLanguageConfig(languageIndex);
  let prompt = config.prompts[promptType];
  
  // 변수 치환
  Object.entries(variables).forEach(([key, value]) => {
    prompt = prompt.replace(new RegExp(`{${key}}`, 'g'), value);
  });
  
  return prompt;
};