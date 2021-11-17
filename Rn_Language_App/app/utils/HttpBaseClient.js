/*************************************************
 * LanguageApp
 * HttpBaseClientjs
 * Created by Abdul on 17/11/2021
 * Copyright © 2020 Embassy. All rights reserved.
 *************************************************/

import {store} from '../store';
import axios from 'axios';

import Constants from './Constants';
import {OAUTH, BASE_URL} from './URL';

export default class HttpBaseClient {
  /**
   * GET method
   * @param {*} url
   * @param {*} params
   * @param {*} isAccessToken
   */
  static get(url, params) {
    // if (!store.getState().deviceState.isNetworkConnectivityAvailable) {
    //   return new Promise((success, failed) => {
    //     failed(CatchErrorHandler(Constants.VALIDATION_MSG.NO_INTERNET));
    //   });
    // }
    return new Promise(function (success, failed) {
      const config = {
        method: 'GET',
        url,
        params,
      };
      axios
        .create({
          baseURL: BASE_URL,
        })(config)
        .then(response => {
          if (response.status === Constants.HTTP_CODE.SUCCESS) {
            try {
              return response.data;
            } catch (e) {
              throw {
                status: response.status,
                message: 'Request Failed',
              };
            }
          } else {
            throw {
              status: response.status,
              message: response.message ? response.message : 'Request Failed',
            };
          }
        })
        .then(response => {
          success(response);
        })
        .catch(err => {
          failed(CatchErrorHandler(err.message));
        });
    });
  }

  /**
   * POST method
   * @param {*} url
   * @param {*} data
   * @param {*} isAccessToken
   */
  static post(url, data) {
    //  if (!store.getState().deviceState.isNetworkConnectivityAvailable) {
    //    return new Promise((success, failed) => {
    //      failed(CatchErrorHandler(Constants.VALIDATION_MSG.NO_INTERNET));
    //    });
    //  }
    console.log('------data---------->', data);
    return new Promise(function (success, failed) {
      let config = {
        method: 'POST',
        url,
      };
      console.log('--------config----->', config);
      config = {
        ...config,
        data,
      };
      console.log('--------config----->', config);
      axios
        .create({
          baseURL: BASE_URL,
        })(config)
        .then(response => {
          if (response.status === Constants.HTTP_CODE.SUCCESS) {
            try {
              return response.data;
            } catch (e) {
              throw {
                status: response.status,
                message: 'Request Failed',
              };
            }
          } else {
            throw {
              status: response.status,
              message: response.message ? response.message : 'Request Failed',
            };
          }
        })
        .then(response => {
          success(response);
        })
        .catch(err => {
          try {
            failed(CatchErrorHandler(err.response.data.message, url));
          } catch (e) {
            failed(CatchErrorHandler(err.message, url));
          }
        });
    });
  }
}

/**
 * Catch error handel method check with error code and error message.
 * @param {*} error
 */
function CatchErrorHandler(error, methodName) {
  if (error.includes(Constants.VALIDATION_MSG.NO_INTERNET)) {
    return {
      status: Constants.HTTP_CODE.NO_INTERNET,
      message: Constants.VALIDATION_MSG.NO_INTERNET,
    };
  }
  if (error.includes(Constants.HTTP_CODE.AUTHENTICATION_FAILURE)) {
    return {
      status: Constants.HTTP_CODE.AUTHENTICATION_FAILURE,
      message: Constants.VALIDATION_MSG.AUTH_FAILED,
    };
  }
  if (error.includes(Constants.HTTP_CODE.INPUT_VALIDATION_ERROR)) {
    if (methodName === OAUTH) {
      return {
        status: Constants.HTTP_CODE.INPUT_VALIDATION_ERROR,
        message: 'Bad request',
      };
    }
    return {
      status: Constants.HTTP_CODE.INPUT_VALIDATION_ERROR,
      message: 'Bad request',
    };
  }
  if (error.includes(Constants.HTTP_CODE.REQUIRED_MISSING)) {
    return {
      status: Constants.HTTP_CODE.REQUIRED_MISSING,
      message: 'Request is Forbidden',
    };
  }
  if (error.includes(Constants.HTTP_CODE.REQUEST_TIMED_OUT_FAILURE)) {
    return {
      status: Constants.HTTP_CODE.REQUEST_TIMED_OUT_FAILURE,
      message: Constants.VALIDATION_MSG.REQ_FAILED,
    };
  }
  if (error.includes(Constants.HTTP_CODE.NO_DATA_FOUND)) {
    return {
      status: Constants.HTTP_CODE.NO_DATA_FOUND,
      message: Constants.VALIDATION_MSG.NO_DATA_FOUND,
    };
  }
  if (error.includes('Network Error')) {
    return {
      status: Constants.HTTP_CODE.NO_INTERNET,
      message: Constants.VALIDATION_MSG.NO_INTERNET,
    };
  }

  return {
    status: Constants.HTTP_CODE.INPUT_VALIDATION_ERROR,
    message: error,
  };
}
