import { uid } from 'uid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    id: uid(10),
    title: 'Book One',
    author: 'Josh Batey',
  },
  {
    id: uid(10),
    title: 'True Me',
    author: 'Joe Baen',
  },
];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      action.payload,
    ];
    case REMOVE_BOOK: return state.filter((remove) => remove.id !== action.index);
    default: return state;
  }
};
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (index) => ({ type: REMOVE_BOOK, index });

export default bookReducer;
