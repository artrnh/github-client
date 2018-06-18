import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
  repos: [],
  page: 1,
  incompleteResults: true,
  loading: true,
  loadingMore: false,
  error: null,
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
        incompleteResults: payload.repositories.incomplete_results,
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
        page: payload.page,
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
        incompleteResults: payload.repositories.incomplete_results,
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
