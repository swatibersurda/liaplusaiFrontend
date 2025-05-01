import {configureStore} from "@reduxjs/toolkit"
import { userApi } from "./api/userApi"
import { userReducer } from "./reducer/userReducer"
import { blogApi } from "./api/blogApi"
import { blogReducer } from "./reducer/blogReducer"
export const store=configureStore({
    reducer:{
        [userApi.reducerPath]: userApi.reducer,
        [userReducer.name]:userReducer.reducer,
        [blogApi.reducerPath]:blogApi.reducer,
        [blogReducer.name]:blogReducer.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([userApi.middleware,blogApi.middleware]),
      devTools: true,
})