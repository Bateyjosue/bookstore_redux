import { uid } from 'uid';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    id: uid(10),
    title: 'Book One',
    author: 'Josh Batey'
  },
  {
    id: uid(10),
    title: 'Book Two',
    author: 'Joe Baen'
  },
];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      // {
      //   id: action.book.id,
      //   title: action.book.title,
      //   author: action.book.author,
      // },
    ];
    case REMOVE_BOOK: return state.filter((remove) => remove === action.index);
    default: return state;
  }
};
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (book, index) => ({ type: REMOVE_BOOK, index });

export default bookReducer;
