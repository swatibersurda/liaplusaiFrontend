import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
  loading: true,
};

export const blogReducer = createSlice({
  name: "blogReducer",
  initialState,
  reducers: {
    isBlogsExist: (state, action) => {
      state.loading = false;
      state.blog = action.payload;
    },
    isBlogEmpty: (state) => {
      state.loading = false;
      state.blog = null;
    },
  },
});

export const { isBlogEmpty, isBlogsExist } = blogReducer.actions;

// Selector (ensure store is set up correctly)
export const selectBlogs = (state) => state.blogReducer.user;

export default blogReducer.reducer;
