import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosQuery";
import { Feed } from "../types/Feed";
import { ARTICLES_PER_PAGE } from "../helpers/consts";
interface feedApiParams {
  page: number;
}
export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<Feed, feedApiParams>({
      query: ({ page }) => ({
        url: "/articles",
        method: "get",
        params: {
          limit: ARTICLES_PER_PAGE,
          offset: page * ARTICLES_PER_PAGE,
        },
      }),
    }),
  }),
});
export const { useGetArticlesQuery } = feedApi; //maybe articles
