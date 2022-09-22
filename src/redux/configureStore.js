import { combineReducers, createStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import reducerCategory from './categories/categories';
// import { uid } from 'uid';
// const initialState = [
//   {
//     id: uid(10),
//     title: 'Book One',
//     author: 'Josh Batey'
//   },
//   {
//     id: uid(10),
//     title: 'Book Two',
//     author: 'Joe Baen'
//   },
// ];

const rootReducer = combineReducers({
  books: bookReducer,
  category: reducerCategory,
});

const store = createStore(rootReducer);

export default store;
