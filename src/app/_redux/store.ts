import { configureStore } from "@reduxjs/toolkit";
import userState from "./user";

const store = configureStore({
  reducer: {
    userState,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
