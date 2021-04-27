export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...initialState,
      user: action.username,
    };
  }
};

export default reducer;
