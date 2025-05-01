import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/v1/user/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => {
        console.log(user,"i am userr")
        return{
        url: "register",
        method: "POST",
        body: user,
      }
      },
    }),
    login: builder.mutation({
      query: (userForLogin) => ({
        url: "login",
        method: "POST",
        body: userForLogin,
      }),
    }),
    logout: builder.mutation({
        query: () => ({
          url: "/logout",
          method: "POST",
          credentials: "include",
        //   headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`
        //   }
        }),
      }),
  }),
});

export const {
  useRegisterMutation,useLoginMutation,useLogoutMutation
} = userApi;
