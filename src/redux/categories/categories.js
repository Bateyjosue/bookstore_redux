const CHECK_STATUS = 'CHECK_STATUS';
const initialState = [];

const reducerCategory = (state = initialState, action) => (
  action.type === CHECK_STATUS ? action.text : state
);

export const checkStatus = () => ({ type: CHECK_STATUS, text: 'Under Construction' });

export default reducerCategory;
