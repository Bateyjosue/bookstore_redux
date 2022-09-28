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
<<<<<<< HEAD
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((remove) => remove.id !== action.index);
    case `${GET_BOOK}/fulfilled`:
      return [...state, ...action.payload];
    default:
      return state;
=======
    case ADD_BOOK: return [
      ...state,
      action.payload,
    ];
    case REMOVE_BOOK: return state.filter((remove) => remove.id !== action.index);
    default: return state;
>>>>>>> parent of 67c1b89 (Fetch data from the APi in getBooks Function)
  }
};
export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(baseURL, book);
  return book;
});
export const removeBook = createAsyncThunk(REMOVE_BOOK, async (index) => {
  await axios.delete(`${baseURL}/${index}`);
  return index;
});

export default bookReducer;
