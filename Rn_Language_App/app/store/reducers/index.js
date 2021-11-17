'use strict';

import {combineReducers} from 'redux';

import {loginState} from './LoginReducer';

const rootReducer = combineReducers({
  loginState,
});

export default rootReducer;
