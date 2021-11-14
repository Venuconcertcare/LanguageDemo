'use strict';
import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Constants from '../utils/Constants';
import PropTypes from 'prop-types';

const Container = (props) => {
  return (
    <Fragment>
      <StatusBar barStyle={props.barStyle} />
      <SafeAreaView style={{flex: 0, backgroundColor: props.topColor}} />
      <SafeAreaView style={{flex: 1, backgroundColor: props.backgroundColor}}>
        {props.children}
      </SafeAreaView>
      <SafeAreaView style={{flex: 0, backgroundColor: props.bottomColor}} />
    </Fragment>
  );
};

Container.defaultProps = {
  barStyle: 'light-content',
  topColor: Constants.COLOR.THEME_COLOR,
  backgroundColor: Constants.COLOR.PRIMARY_COLOR,
  bottomColor: Constants.COLOR.WHITE_COLOR,
};

export default Container;
