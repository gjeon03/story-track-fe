import { useQuery } from "react-query";
import { BASE_URL } from "../utils/fetcher";

interface Image {
  imgId: number;
  postId: number;
  geoLat: string;
  geoLong: string;
  imgPath: string;
  imgDtm: string;
  rgstDtm: string;
  thumbYn: string;
}

interface BlogDetail {
  postId: number;
  title: string;
  ogText: string;
  aiGenText: string;
  password: string;
  rgstDtm: string;
  chngDtm: null;
  blogImgList: Image[];
}

const useBlgoDetailQuery = (id?: string) => {
  return useQuery<BlogDetail>({
    queryKey: ["blog-detail", id],
    queryFn: () =>
      fetch(`${BASE_URL}/blog/list?post_id=${id}`).then((res) => res.json()),
    enabled: !!id,
  });
};

export default useBlgoDetailQuery;
