import { BASE_URL } from "@/hooks/utils/fetcher";
import { http, HttpResponse } from "msw";

export const getPostsDetail = http.get(
  `${BASE_URL}/posts/:post_id`,
  () => {
    return HttpResponse.json({
      success: true,
      code: "000",
      message: "String",
      data: {
        postId: 1,
        title: "블로그 제목12",
        ogText: "가나다다ㅏㄹ아아ㅏ아라라미랑ㄹ12",
        aiGenText: "가느다란 물방울 이건 ai12",
        password:
          "5906ac361a137e2d286465cd6588ebb5ac3f5ae955001100bc41577c3d751764",
        rgstDtm: "2025-01-05 10:26:27",
        chngDtm: null,
        blogImgList: [
          {
            imgId: 1,
            postId: 1,
            geoLat: "50.004998",
            geoLong: "126.100333",
            imgPath: "c.jpg",
            imgDtm: "2025-01-05 10:31:44",
            rgstDtm: "2025-01-05 10:31:44",
            thumbYn: "Y",
          },
          {
            imgId: 2,
            postId: 1,
            geoLat: "50.004998",
            geoLong: "126.100333",
            imgPath: "가나닥라jpg",
            imgDtm: "2025-01-05 10:31:52",
            rgstDtm: "2025-01-05 10:31:52",
            thumbYn: "N",
          },
          {
            imgId: 3,
            postId: 1,
            geoLat: "50.004998",
            geoLong: "126.100333",
            imgPath: "으하하하.jpg",
            imgDtm: "2025-01-05 10:31:56",
            rgstDtm: "2025-01-05 10:31:56",
            thumbYn: "N",
          },
        ],
      },
    });
  },
);
