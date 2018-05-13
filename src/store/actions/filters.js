import * as actionsTypes from '../actions/actionsTypes';

export const updateForm = changedFields => (
  {
    type: actionsTypes.UPDATE_FILTERS_FORM,
    payload: { changedFields },
  }
);
