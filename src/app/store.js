import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../components/BooksSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
