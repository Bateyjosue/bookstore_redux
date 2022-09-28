// import { uid } from 'uid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOK = 'GET_BOOK';
const baseURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LlbJ2UKwVs2cchJYJmrM/books';

const initialState = [];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((remove) => remove.id !== action.index);
    case `${GET_BOOK}/fulfilled`:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (index) => ({ type: REMOVE_BOOK, index });

export const getBooks = createAsyncThunk(GET_BOOK, async () => {
  const response = await axios.get(baseURL);
  const data = Object.keys(response.data).map((key) => ({
    item_id: key,
    ...response.data[key][0],
  }));
  return data;
});

export default bookReducer;
