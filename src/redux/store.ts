import { configureStore } from "@reduxjs/toolkit";
import { userAddSlice } from "./slices";

export const store = configureStore({
  reducer: {
    userReducer: userAddSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
