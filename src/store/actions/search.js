import * as actionsTypes from '../actions/actionsTypes';

export const updateForm = input => ({
  type: actionsTypes.UPDATE_SEARCH_FORM,
  payload: { input },
});

export const fetchRepos = (query, filters) => ({
  type: actionsTypes.FETCH_REPOS_INIT,
  payload: { query, filters },
});

export const saveRepos = repositories => ({
  type: actionsTypes.FETCH_REPOS_SUCCESS,
  payload: { repositories },
});

export const fetchReposFail = error => ({
  type: actionsTypes.FETCH_REPOS_FAIL,
  error,
});

export const fetchMoreRepos = (query, filters, page) => ({
  type: actionsTypes.FETCH_MORE_REPOS_INIT,
  payload: { query, filters, page },
});

export const saveMoreRepos = repositories => ({
  type: actionsTypes.FETCH_MORE_REPOS_SUCCESS,
  payload: { repositories },
});

export const fetchMoreReposFail = error => ({
  type: actionsTypes.FETCH_MORE_REPOS_FAIL,
  error,
});
