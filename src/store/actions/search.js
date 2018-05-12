import * as actionsTypes from '../actions/actionsTypes';

export const updateForm = input => (
  {
    type: actionsTypes.UPDATE_SEARCH_FORM,
    payload: { input },
  }
);
