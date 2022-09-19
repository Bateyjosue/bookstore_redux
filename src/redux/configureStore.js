import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducer from './books/books';
import reducerCategory from './categories/categories';

const rootReducer = combineReducers({
  reducer,
  reducerCategory,
});

const store = configureStore(rootReducer);

export default store;
