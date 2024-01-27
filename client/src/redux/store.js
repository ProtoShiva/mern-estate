import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user/userSlice.js"
import { useRouteError } from "react-router-dom"

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
