import { createSlice } from "@reduxjs/toolkit";
import { books } from "../utilities/Books";
const initialState = books;

export const BooksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = BooksSlice.actions;

export default BooksSlice.reducer;
