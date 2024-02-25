import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosQuery";
import { ArticleFeeds, Feed } from "../types/Feed";
import { PopularTags } from "../types/PopularTags";
import { ARTICLES_PER_PAGE } from "../helpers/consts";

interface BaseFeed {
  page: number;
}
interface feedApiParams extends BaseFeed {
  tag: string | null;
}
export interface feedData {
  articles: ArticleFeeds[];
  articlesCount: number;
}
export interface ProfileFeed extends BaseFeed {
  author: string;
}
export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<feedData, feedApiParams>({
      query: ({ page, tag }) => ({
        url: "/articles",
        method: "get",
        params: {
          limit: ARTICLES_PER_PAGE,
          offset: page * ARTICLES_PER_PAGE,
          tag,
        },
      }),
      transformResponse: (response: Feed) => {
        return {
          articles: response.articles || [],
          articlesCount: response.articlesCount || 0,
        };
      },
    }),
    getProfileFeeds: builder.query<feedData, ProfileFeed>({
      query: ({ page, author }) => ({
        url: "/articles",
        method: "get",
        params: {
          limit: ARTICLES_PER_PAGE,
          offset: page * ARTICLES_PER_PAGE,
          author,
        },
      }),
    }),
    getPopularTags: builder.query<PopularTags, null>({
      query: () => ({
        url: "/tags",
        method: "get",
      }),
    }),
  }),
});
export const {
  useGetArticlesQuery,
  useGetProfileFeedsQuery,
  useGetPopularTagsQuery,
} = feedApi;
