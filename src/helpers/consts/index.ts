import { axiosBaseQuery } from "../../api/axiosQuery";

export const ARTICLES_PER_PAGE = 10;
export const BASE_QUERY = axiosBaseQuery({
  baseUrl: "https://api.realworld.io/api",
});
