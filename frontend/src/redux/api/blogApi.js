import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:9000/api/v1/blog/",
      credentials: "include",
    }),
    tagTypes: ['Blog'], 
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: (payload) => ({
        url: "addPost",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
      invalidatesTags: ['Blog'], 
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `deletePost/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ['Blog'], 
    }),
    getPost: builder.query({
        query: () => ({
          url: "getPost",
          method: "GET",
        }),
        providesTags: ['Blog'],
      }),
  }),
});

export const {
  useAddPostMutation,useDeletePostMutation,useGetPostQuery
} = blogApi;
