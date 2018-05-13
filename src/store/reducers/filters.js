import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
  fields: {
    language: {
      value: 'JavaScript',
    },
    owner: {
      value: '',
    },
    stars: {
      value: 0,
    },
    forks: {
      value: 0,
    },
    date: {
      value: null,
    },
    type: {
      value: 'All',
    },
    hasOpenedIssues: {
      value: false,
    },
    hasTopics: {
      value: false,
    },
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.UPDATE_FILTERS_FORM:
      return {
        ...state,
        fields: {
          ...state.fields,
          ...payload.changedFields,
        },
      };

    default:
      return state;
  }
};

export default reducer;
