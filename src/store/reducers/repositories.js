import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
  repos: {},
  loading: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.FETCH_REPOS_INIT:
      return {
        ...state,
        loading: true,
      };

    case actionsTypes.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        repos: payload.repositories.items,
        loading: false,
      };

    case actionsTypes.FETCH_REPOS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
