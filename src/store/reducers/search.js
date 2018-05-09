import { CHANGE_INPUT_VALUE } from '../actions/actionsTypes';

const initialState = {
  value: '',
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        value: payload.value,
      };

    default:
      return state;
  }
};

export default reducer;
