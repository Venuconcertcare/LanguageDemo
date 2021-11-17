'use strict';

import {LOGIN} from '../../../utils/URL';
import HttpBaseClient from '../../../utils/HttpBaseClient';
import Utility from '../../../utils/Utility';

export const loginButtonSubmit = (email, password) => {
  return (dispatch, getState) => {
    HttpBaseClient.post(LOGIN, {
      email,
      password,
    })
      .then(response => {
        console.log('--------->', response.data);
      })
      .catch(error => {
        Utility.showAlert('Error', 'Login Failed');
      });
  };
};
