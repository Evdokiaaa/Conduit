import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_QUERY } from "../helpers/consts";

import { GlobalProfile } from "../types/Profile";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: BASE_QUERY,
  endpoints: (builder) => ({
    getProfileByName: builder.query<GlobalProfile, string>({
      query: (name) => ({
        url: `/profiles/${name}`,
      }),
    }),
  }),
});
export const { useGetProfileByNameQuery } = profileApi;
