'use strict';

import Constants from '../../utils/Constants';

let initialState = {
  isLoading: false,
};
const {
  ACTIONS: {SPLASH_SHOW_LOADING},
} = Constants;

export const loginState = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case SPLASH_SHOW_LOADING:
      return {...state, isLoading: true};
    default:
      return state;
  }
};
