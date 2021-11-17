'use strict';

import Constants from '../../utils/Constants';

let initialState = {
  isLoading: false,
  loginDetails: {},
};
const {
  ACTIONS: {SHOW_LOGIN_LOADING, LOGIN_SUCCESS, HIDE_LOGIN_LOADING},
} = Constants;

export const loginState = (state = initialState, action) => {
  const {type, loginDetails} = action;
  switch (type) {
    case SHOW_LOGIN_LOADING:
      return {...state, isLoading: true};
    case HIDE_LOGIN_LOADING:
      return {...state, isLoading: false};
    case LOGIN_SUCCESS:
      return {...state, loginDetails};
    default:
      return state;
  }
};
