import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosQuery";
import { Feed } from "../types/Feed";
export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<Feed, void>({
      query: () => ({
        url: "/articles",
        method: "get",
      }),
    }),
  }),
});
export const { useGetArticlesQuery } = feedApi; //maybe articles
