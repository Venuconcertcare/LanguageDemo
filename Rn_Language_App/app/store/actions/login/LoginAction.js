'use strict';

import {LOGIN} from '../../../utils/URL';
import HttpBaseClient from '../../../utils/HttpBaseClient';
import Utility from '../../../utils/Utility';
import {Actions} from 'react-native-router-flux';
import Constants from '../../../utils/Constants';

export const loginButtonSubmit = (email, password) => {
  return dispatch => {
    HttpBaseClient.post(LOGIN, {
      email,
      password,
    })
      .then(response => {
        dispatch({
          type: Constants.ACTIONS.LOGIN_SUCCESS,
          loginDetails: response,
        });
        Actions.profileScreen();
      })
      .catch(error => {
        Utility.showAlert('Error', 'Login Failed');
      });
  };
};
