import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface feedState {
  isLoading: {
    tags: boolean;
    articles: boolean;
  };
  isLoaded: boolean;
}
const initialState: feedState = {
  isLoading: {
    tags: true,
    articles: true,
  },
  isLoaded: false,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setTagsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading.tags = action.payload;
      state.isLoaded = !state.isLoading.tags && !state.isLoading.articles;
    },
    setArticlesLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading.articles = action.payload;
      state.isLoaded = !state.isLoading.tags && !state.isLoading.articles;
    },
  },
});
export const { setTagsLoading, setArticlesLoading } = feedSlice.actions;
export default feedSlice.reducer;
