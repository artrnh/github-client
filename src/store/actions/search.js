import * as actionsTypes from '../actions/actionsTypes';

export const updateForm = input => (
  {
    type: actionsTypes.UPDATE_SEARCH_FORM,
    payload: { input },
  }
);

export const fetchRepos = url => (
  {
    type: actionsTypes.FETCH_REPOS_INIT,
    payload: { url },
  }
);
