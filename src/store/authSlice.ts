import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RegisterUserBio } from "../types/Register";
import { RootState } from "./store";
interface AuthState {
  user: RegisterUserBio["user"] | null;
}

const initialState: AuthState = {
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<RegisterUserBio["user"] | null>) => {
      if (action.payload === null) {
        state.user = null;
        return;
      }
      state.user = { ...action.payload };
    },
  },
});
export const selectedUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.user?.token;
export const { setUser } = authSlice.actions;
