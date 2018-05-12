import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
  input: {
    value: '',
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.UPDATE_SEARCH_FORM:
      return {
        ...state,
        input: { ...payload.input },
      };

    default:
      return state;
  }
};

export default reducer;
