import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RegisterUser, RegisterUserBio } from "../types/Register";
const initialState = {
  user: {},
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<RegisterUserBio["user"]>) => {
      state.user = { ...action.payload };
    },
  },
});

export const { setUser } = authSlice.actions;
