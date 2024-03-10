import { createApi } from "@reduxjs/toolkit/query/react";
import { RegisterUser, RegisterUserBio } from "../types/Register";
import { BASE_QUERY } from "../helpers/consts";
import { LoginUserBio, LoginUser } from "../types/Login";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: BASE_QUERY,
  endpoints: (builder) => ({
    register: builder.query<RegisterUserBio, RegisterUser["user"]>({
      query: (args) => ({
        url: "/users",
        method: "POST",
        data: {
          user: args,
        },
      }),
    }),
    login: builder.query<LoginUserBio, LoginUser["user"]>({
      query: (args) => ({
        url: "/users/login",
        method: "POST",
        data: {
          user: args,
        },
      }),
    }),
  }),
});
export const { useLazyRegisterQuery, useLazyLoginQuery } = authApi;
