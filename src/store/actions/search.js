import { CHANGE_INPUT_VALUE } from '../actions/actionsTypes';

export const changeValue = value => (
  {
    type: CHANGE_INPUT_VALUE,
    payload: { value },
  }
);
