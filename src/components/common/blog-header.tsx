import { useFormContext } from "@/context/form-context";
// import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxKeyboard } from "react-icons/rx";
import Loading from "./loading";
// import useBlogPostMutation, {
//   ImageSaveInfo,
// } from "@/hooks/mutations/use-blog-post-mutation";

export default function BlogHeader() {
  const {
    activeComponentKey,
    setActiveComponentKey,
    // description,
    // images,
    // aiContent,
    // aiContentIndex,
  } = useFormContext();
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // const { mutate } = useBlogPostMutation({
  //   onSuccess: (data) => {
  //     setIsLoading(false);
  //     router.push(`/blog/${data}?new=true`);
  //   },
  //   onError: () => {
  //     setIsLoading(false);
  //   },
  // });

  const handleCancel = () => {
    setActiveComponentKey("generator");
  };

  // const handlePost = () => {
  //   setIsLoading(true);

  //   console.log("images", images);

  //   if (images && aiContentIndex !== undefined) {
  //     console.log("aiContentIndex", aiContentIndex);
  //     const imgSaveList: ImageSaveInfo[] = images.map((image) => ({
  //       fileName: image.fileName,
  //       geoLat: image.lat.toString(),
  //       geoLong: image.lon.toString(),
  //       imgDtm: image.createDate,
  //       thumbYn: image.active ? "Y" : "N",
  //     }));
  //     const aiContentResult = aiContent[aiContentIndex];
  //     const aiGenText = aiContentResult.content;
  //     const title = aiContentResult.title;
  //     const files = images
  //       .flatMap(imageArray => imageArray) // 중첩 배열 풀기
  //       .filter(image => image.previewUrl) // previewUrl 있는 것만 필터링
  //       .map(image => image.previewUrl);

  //     console.log("여기서파일추가?", files);

  //     mutate({ ogText: description, aiGenText, title, imgSaveList, files });
  //   }
  // };

  return (
    <div
      className={`flex h-[36px] items-center justify-between bg-black-primary p-5 text-white-primary`}
    >
      {/* {activeComponentKey === "preview" ? (
        <div className="text-[14px] tracking-tight" onClick={handleCancel}>
          Cancel
        </div>
      ) : ( */}
      <RxKeyboard onClick={handleCancel} />
      {/* )} */}
      <div className="flex items-center gap-2">
        <h1 className="text-md">Travel</h1>
        <IoIosArrowDown />
      </div>
      <button
        className={`text-[14px] tracking-tight ${activeComponentKey === "preview" ? "text-white-primary" : "text-[#7A7A7A]"}`}
        disabled={activeComponentKey !== "preview"}
        // onClick={handlePost}
      >
        {isLoading ? <Loading type="loading" color="#ffffff" /> : "Post"}
      </button>
    </div>
  );
}
