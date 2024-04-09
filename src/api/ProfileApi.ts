import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_QUERY } from "../helpers/consts";

import { GlobalProfile } from "../types/Profile";
import { UpdateProfile, UpdateProfileData } from "../types/UpdateProfile";
import { FollowUser } from "../types/FollowUser";
interface ProfileParams {
  username: string;
}
interface FollowUserParams {
  username: string;
}
interface UpdateProfileQuery {
  avatar: string;
  email: string;
  username: string;
  bio?: string;
  newPassword?: string;
}
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: BASE_QUERY,
  tagTypes: ["Profile", "Follow"],
  endpoints: (builder) => ({
    getProfileByName: builder.query<GlobalProfile, ProfileParams>({
      query: ({ username }) => ({
        url: `/profiles/${username}`,
      }),
      providesTags: ["Profile", "Follow"],
      /*==================
        ---MUTATION---
        ==================*/
    }),
    updateProfile: builder.mutation<UpdateProfile, UpdateProfileQuery>({
      query: ({ email, newPassword, username, bio, avatar }) => {
        const userData: UpdateProfileData = {
          user: {
            email,
            username,
            image: avatar,
          },
        };
        if (bio) userData.user.bio = bio;
        if (newPassword) userData.user.password = newPassword;
        return {
          url: "/user",
          method: "PUT",
          data: userData,
        };
      },
      invalidatesTags: ["Profile"],
    }),
    followUser: builder.mutation<FollowUser, FollowUserParams>({
      query: ({ username }) => ({
        url: `/profiles/${username}/follow`,
        method: "POST",
      }),
      invalidatesTags: ["Follow"],
    }),
    unfollowUser: builder.mutation<FollowUser, FollowUserParams>({
      query: ({ username }) => ({
        url: `/profiles/${username}/follow`,
        method: "DELETE",
      }),
      invalidatesTags: ["Follow"],
    }),
  }),
});
export const {
  useGetProfileByNameQuery,
  useUpdateProfileMutation,
  useFollowUserMutation,
  useUnfollowUserMutation,
} = profileApi;
