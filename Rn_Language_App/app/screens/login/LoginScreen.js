'use strict';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  Platform,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
// import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Container from '../../components/Container';

class LoginScreen extends Component {
  static propTypes = {
    //   isLoginPageLoading: PropTypes.bool,
    //   loginManualUserDetails: PropTypes.func,
    //   updateSelectedUser: PropTypes.func,
  };
  render() {
    return (
      <Container>
        <View>
          <Text>Home</Text>
        </View>
      </Container>
    );
  }
}

/**
 * Maps state from store to props to this component
 */
const mapStateToProps = (state, props) => {
  const {
    //   loginManualState: {isLoginPageLoading},
    //   loginState: {loginUserData},
    //   deviceState: {screen_type, params_value},
  } = state;

  return {
    //   isLoginPageLoading,
    //   loginUserData,
    //   screen_type,
    //   params_value,
  };
};

/**
 * Dispatch functions from this component to the Actions
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // loginManualUserDetails,
      // updateSelectedUser,
      // resetDeepLinkData,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
