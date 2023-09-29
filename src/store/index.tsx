import { useDispatch } from "react-redux";

import transactionsReducer from "./transactions-slice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    transactions: transactionsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
