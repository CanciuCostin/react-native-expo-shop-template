import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsDataSlice";

export const store = configureStore({
  reducer: {
    productsData: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
