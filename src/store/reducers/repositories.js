import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
  repos: {},
  page: 1,
  loading: true,
  loadingMore: false,
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

    case actionsTypes.UPDATE_SEARCH_FORM:
    case actionsTypes.UPDATE_FILTERS_FORM:
      return {
        ...state,
        page: 1,
      };

    case actionsTypes.FETCH_MORE_REPOS_INIT:
      return {
        ...state,
        page: state.page + 1,
        loadingMore: true,
      };

    case actionsTypes.FETCH_MORE_REPOS_SUCCESS:
      return {
        ...state,
        repos: [
          ...state.repos,
          ...payload.repositories.items.filter(repo =>
            !state.repos.find(savedRepo => repo.id === savedRepo.id)),
        ],
        loadingMore: false,
      };

    case actionsTypes.FETCH_MORE_REPOS_FAIL:
      return {
        ...state,
        error: action.error,
        loadingMore: false,
      };

    default:
      return state;
  }
};

export default reducer;
