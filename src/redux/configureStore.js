import {
  combineReducers,
  createStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import reducerCategory from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  category: reducerCategory,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
