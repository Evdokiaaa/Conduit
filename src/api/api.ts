import { createApi } from "@reduxjs/toolkit/query/react";
import { ArticleFeeds, Feed } from "../types/Feed";
import { PopularTags } from "../types/PopularTags";
import { ARTICLES_PER_PAGE, BASE_QUERY } from "../helpers/consts";
import { SingleArticleRoot } from "../types/SingleArticle";
import { CreateArticleBIO } from "../types/CreateArticle";
import { splitTags } from "../utils";
import { EditArticle, EditArticleBIO } from "../types/EditArticle";
import { DeleteArticle, DeleteArticleProps } from "../types/DeleteArticle";
import { CommentData } from "../types/Comment";
import { CreateComment } from "../types/CreateComment";

interface BaseFeed {
  page: number;
}
interface feedApiParams extends BaseFeed {
  tag: string | null;
  isPersonalFeed: boolean | null;
}
export interface feedData {
  articles: ArticleFeeds[];
  articlesCount: number;
}
export interface ProfileFeed extends BaseFeed {
  author?: string;
  isFavorite?: boolean;
}
export interface SingleArticleParams {
  slug: string;
}
interface CreateArticleParams {
  title: string;
  description: string;
  body: string;
  tags: string;
}
interface EditArticleParams extends EditArticle {
  slug: string;
}
interface CreateCommentQuery {
  slug: string;
  comment: string;
}
interface DeleteCommentQuery {
  articleSlug: string;
  commentId: number;
}
export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: BASE_QUERY,
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getArticles: builder.query<feedData, feedApiParams>({
      query: ({ page, tag, isPersonalFeed }) => ({
        url: isPersonalFeed ? "/articles/feed" : "/articles",
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
      query: ({ page, author, isFavorite = false }) => ({
        url: "/articles",
        method: "get",
        params: {
          limit: ARTICLES_PER_PAGE,
          offset: page * ARTICLES_PER_PAGE,
          author: isFavorite ? undefined : author,
          favorited: !isFavorite ? undefined : author,
        },
      }),
    }),
    getPopularTags: builder.query<PopularTags, null>({
      query: () => ({
        url: "/tags",
        method: "get",
      }),
    }),
    getSingleArticle: builder.query<SingleArticleRoot, SingleArticleParams>({
      query: ({ slug }) => ({
        url: `/articles/${slug}`,
        method: "get",
      }),
    }),
    getCommentsForArticle: builder.query<CommentData, SingleArticleParams>({
      keepUnusedDataFor: 1,
      query: ({ slug }) => ({
        url: `/articles/${slug}/comments`,
        method: "GET",
      }),
      providesTags: ["Comments"],
    }),
    //======================
    //----MUTATION----
    //======================
    createArticle: builder.mutation<CreateArticleBIO, CreateArticleParams>({
      query: ({ title, description, body, tags }) => {
        const data = {
          article: {
            title,
            description,
            body,
            tagList: splitTags(tags),
          },
        };
        return {
          url: "/articles",
          method: "POST",
          data,
        };
      },
    }),

    createComment: builder.mutation<CreateComment, CreateCommentQuery>({
      query: ({ slug, comment }) => {
        const commentData = {
          comment: {
            body: comment,
          },
        };
        return {
          url: `/articles/${slug}/comments`,
          method: "POST",
          data: commentData,
        };
      },
      invalidatesTags: ["Comments"],
    }),
    deleteComment: builder.mutation<unknown, DeleteCommentQuery>({
      query: ({ articleSlug, commentId }) => ({
        url: `/articles/${articleSlug}/comments/${commentId}`,
        method: "DELETE",
      }),
    }),
    editArticle: builder.mutation<EditArticleBIO, EditArticleParams>({
      query: ({ title, description, body, tags, slug }) => {
        const data = {
          article: {
            title,
            description,
            body,
            tagList: splitTags(tags),
          },
        };
        return {
          url: `/articles/${slug}`,
          method: "PUT",
          data,
        };
      },
    }),
    deleteArticle: builder.mutation<DeleteArticle, DeleteArticleProps>({
      query: ({ slug }) => {
        return {
          url: `/articles/${slug}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetProfileFeedsQuery,
  useGetPopularTagsQuery,
  useGetSingleArticleQuery,
  useGetCommentsForArticleQuery,
  useCreateCommentMutation,
  useCreateArticleMutation,
  useDeleteCommentMutation,
  useEditArticleMutation,
  useDeleteArticleMutation,
} = feedApi;
