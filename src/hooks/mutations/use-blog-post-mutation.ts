import { useMutation, UseMutationOptions } from "react-query";
import { BASE_URL } from "../utils/fetcher";
import { saveBlogPost } from "@/utils/indexed-db";

interface BlogPostResponse {
  postId: string;
}

export interface ImageSaveInfo {
  fileName: string;
  geoLat: string;
  geoLong: string;
  imgDtm: string;
  thumbYn: "Y" | "N";
  imgStream?: string;
}

export interface BlogPost {
  postId?: number;
  title: string;
  ogText: string;
  aiGenText: string;
  imgSaveList: ImageSaveInfo[];
  files: File[];
}

const useBlogPostMutation = (
  options: UseMutationOptions<number, Error, unknown>,
) => {
  return useMutation({
    mutationKey: "blogPost",
    mutationFn: async (data: BlogPost) => {
      const formData = new FormData();

      data.files.forEach((file, index) => {
        console.log(`files[${index}]`, file);
        formData.append(`files`, file);
      });

      // 텍스트 필드 추가
      formData.append("title", data.title);
      formData.append("ogText", data.ogText);
      formData.append("aiGenText", data.aiGenText);

      // 이미지 정보 추가
      data.imgSaveList.forEach((image, index) => {
        formData.append(`imgSaveList[${index}].fileName`, image.fileName);
        formData.append(`imgSaveList[${index}].geoLat`, image.geoLat);
        formData.append(`imgSaveList[${index}].geoLong`, String(Number(image.geoLong) * -1)); // -1을 곱한이유는 경도의 W에 대응하기위해
        formData.append(`imgSaveList[${index}].imgDtm`, image.imgDtm);
        formData.append(`imgSaveList[${index}].thumbYn`, image.thumbYn);
      });

      const blogPost = {
        title: data.title,
        ogText: data.ogText,
        aiGenText: data.aiGenText,
        imgSaveList: data.imgSaveList, // imgSaveList 포함
      } as BlogPost;

      // IndexedDB에 데이터 저장
      let savedId: number | null = null;
      try {
        savedId = await saveBlogPost(blogPost); // IndexedDB에 저장
        console.log("Blog post saved to IndexedDB:", blogPost);
      } catch (err) {
        console.error("Failed to save blog post to IndexedDB:", err);
      }

      if (!response.ok) {
        throw new Error("Failed to upload blog post");
      // 파일 처리 (현재는 IndexedDB에 저장하지 않음)
      if (data.files && data.files.length > 0) {
        console.log("Files provided:", data.files);
      } else {
        console.error("No files found in the 'files' array");
      }

      return response.json();
      // IndexedDB에 저장된 id 반환
      return Promise.resolve(savedId as number);

      // 백엔드
      // JSON 문자열로 변환하여 FormData에 추가
      // formData.append("blogPost", JSON.stringify(blogPost));

      // // 파일 추가
      // if (data.files && data.files.length > 0) {
      //   data.files.forEach((file, index) => {
      //     formData.append(`files[${index}]`, file);
      //   });
      // } else {
      //   console.error("No files found in the 'files' array");
      // }

      // for (const [key, value] of formData.entries()) {
      //   console.log("key", key);
      //   console.log("value", value);
      //   if (value instanceof File) {
      //     console.log(
      //       `${key}: ${value.name}, size: ${(value.size / 1024 / 1024).toFixed(2)} MB`,
      //     );
      //   } else {
      //     console.log(`${key}: ${value}`);
      //   }
      // }

      // const response = await fetch(`${BASE_URL}/blog/save`, {
      //   method: "POST",
      //   body: formData,
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to upload blog post");
      // }

      // return response.json();
    },
    ...options,
  });
};

export default useBlogPostMutation;
