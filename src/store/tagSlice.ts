import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TagState {
  selectedTag: string | null;
}

const initialState: TagState = { selectedTag: null };

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    selectTag: (state, action: PayloadAction<string | null>) => {
      state.selectedTag = action.payload;
    },
  },
});

export const { selectTag } = tagSlice.actions;
export default tagSlice.reducer;
