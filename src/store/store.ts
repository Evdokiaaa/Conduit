import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { feedApi } from "../api/api";
import { tagSlice } from "./tagSlice";
import { feedSlice } from "./feedSlice";

export const store = configureStore({
  reducer: {
    [feedApi.reducerPath]: feedApi.reducer,
    [tagSlice.reducerPath]: tagSlice.reducer,
    [feedSlice.reducerPath]: feedSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
