

 'use strict';

 /**
  * Returns all the constants used in the application
  * Separate constants according to the category and usage
  */
 module.exports = {

  
   ACTIONS: {
     //Common Actions
     SHOW_LOGIN_LOADING: 'SHOW_LOGIN_LOADING',
     HIDE_LOGIN_LOADING: 'HIDE_LOGIN_LOADING',
     LOGIN_SUCCESS: 'LOGIN_SUCCESS',
   },
 
   COLOR: {
     THEME_COLOR: '#12183F',
     THEME_SECONDARY: '#7D90C9',
     WHITE_COLOR:'#ffffff',
     PRIMARY_COLOR:'#FEFEFE',
     LABLE_COLOR:'#1C1C1C',
     TEXT_BOX_COLOR:'#F1F1F1',
     LOGIN_BTN_COLOR:'#EC173D',
     FONT_PRIMARY: '#12183F',
     
     
   },
 
   FONT_SIZE: {
     MONSTER_X: 62,
     MONSTER: 60,
     MEGA: 40,
     COUNT: 34,
     DOLLAR_SIZE: 36,
     TITLE: 34,
     DOLLAR: 32,
     ANALYTICS: 26,
     SUB_TITLE: 24,
     SERVICES: 20,
     L: 18,
     M: 16,
     REGULAR: 14,
     SR: 13,
     S: 12,
     XS: 10,
   },
   ALERT: {
     TITLE: {
       INFO: 'Info',
       ERROR: 'Error',
       FAILED: 'Failed',
       SUCCESS: 'Success',
       
     },
     MESSAGE: {
     
     },
     BTN: {
       OK: 'Ok',
       CONFIRM: 'Confirm',
       CANCEL: 'Cancel',
       YES: 'Yes',
       NO: 'No',
       SAVE_AND_EXIT: 'Save & Close',
       CLOSE: 'Close',
       DISMISS: 'Dismiss',
     },
   },
   VALIDATION_MSG: {
    
   },
   SCREEN_SIZE: {
    PLUS_SIZE: 777,
  },
   HTTP_CODE: {
     SUCCESS: 200,
     INSERT_SUCESS: 201,
     AUTHENTICATION_FAILURE: 401,
     REQUIRED_MISSING: 403,
     REQUEST_TIMED_OUT_FAILURE: 500,
     INPUT_VALIDATION_ERROR: 400,
     NO_DATA_FOUND: 404,
     NO_INTERNET: 503,
     UNPROCESSABLE_ENTITY: 422,
   },
   ASYNC: {
    
   },
 };
 