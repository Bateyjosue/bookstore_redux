import { combineReducers, createStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import reducerCategory from './categories/categories';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  books: bookReducer,
  category: reducerCategory,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
