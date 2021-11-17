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
import Constants from '../../utils/Constants';
import Utility from '../../utils/Utility';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const deviceHeight = Utility.isiPhoneX()
  ? Constants.SCREEN_SIZE.PLUS_SIZE
  : Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class LoginScreen extends Component {
  static propTypes = {
    //   isLoginPageLoading: PropTypes.bool,
    //   loginManualUserDetails: PropTypes.func,
    //   updateSelectedUser: PropTypes.func,
  };
  render() {
    return (
      <Container bottomColor={Constants.COLOR.PRIMARY_COLOR}>
        <View
          style={{
            flex: 1,
            backgroundColor: Constants.COLOR.PRIMARY_COLOR,
          }}>
          {/* <KeyboardAwareScrollView showsVerticalScrollIndicator={false}> */}
          <Image
            resizeMode={'contain'}
            source={require('../../assets/image/logo.png')}
            style={{
              height: deviceWidth / 4,
              width: deviceWidth / 3,
              marginTop: deviceHeight / 12,
              alignSelf: 'center',
            }}
          />
          <View style={{marginHorizontal: 20, marginTop: 50}}>
            <Text
              style={{
                fontSize: Constants.FONT_SIZE.ANALYTICS,
                color: Constants.COLOR.LABLE_COLOR,
                paddingVertical: 12,
                textAlign: 'center',
              }}>
              Login Now
            </Text>
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text
              style={{
                fontSize: Constants.FONT_SIZE.S,
                color: Constants.COLOR.LABLE_COLOR,
                paddingVertical: 12,

                textAlign: 'center',
              }}>
              Please enter the details below to continue
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: Constants.COLOR.TEXT_BOX_COLOR,
              borderRadius: 10,
              overflow: 'hidden',
              paddingHorizontal: 20,
              paddingVertical: Platform.OS === 'ios' ? 12 : 0,
              marginBottom: 10,
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <TextInput
              style={{
                flex: 1,

                color: Constants.COLOR.LABLE_COLOR,
                fontSize: Constants.FONT_SIZE.M,
                alignItems: 'center',
              }}
              value={'Vchandrasekar@concertcare.com'}
              keyboardType="default"
              underlineColorAndroid="transparent"
              autoCapitalize={'none'}
              returnKeyType={'next'}
            />
            <Image
              resizeMode={'contain'}
              source={require('../../assets/image/email.png')}
              style={{
                height: deviceWidth / 25,
                width: deviceWidth / 25,
                alignSelf: 'center',
                tintColor: Constants.COLOR.LABLE_COLOR,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: Constants.COLOR.TEXT_BOX_COLOR,
              borderRadius: 10,
              overflow: 'hidden',
              paddingHorizontal: 20,
              paddingVertical: Platform.OS === 'ios' ? 12 : 0,
              marginBottom: 10,
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <TextInput
              style={{
                flex: 1,

                color: Constants.COLOR.LABLE_COLOR,
                fontSize: Constants.FONT_SIZE.M,
                alignItems: 'center',
              }}
              value={'12366666'}
              keyboardType="default"
              underlineColorAndroid="transparent"
              autoCapitalize={'none'}
              returnKeyType={'next'}
              secure={true}
            />
            <Image
              resizeMode={'contain'}
              source={require('../../assets/image/EyeHidden.png')}
              style={{
                height: deviceWidth / 20,
                width: deviceWidth / 20,
                alignSelf: 'center',
                tintColor: Constants.COLOR.LABLE_COLOR,
              }}
            />
          </View>
          <TouchableOpacity style={{marginVertical: 10}} onPress={() => {}}>
            <Text
              style={{
                color: Constants.COLOR.LOGIN_BTN_COLOR,
                fontSize: Constants.FONT_SIZE.L,

                textAlign: 'right',
                marginTop: 10,
                marginHorizontal: 20,
              }}>
              {' '}
              Forget Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 40,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 20,
              marginTop: 50,
              paddingVertical: 5,
            }}
            onPress={() => {
              Actions.selectlanguageScreen();
            }}>
            <Text
              style={{
                fontSize: Constants.FONT_SIZE.L,
                color: Constants.COLOR.PRIMARY_COLOR,
                paddingVertical: 12,

                textAlign: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginVertical: 10,
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: Constants.COLOR.LABLE_COLOR,
                fontSize: Constants.FONT_SIZE.M,
                marginTop: 20,
              }}>
              {' '}
              Don't have an account!
            </Text>

            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  color: Constants.COLOR.LOGIN_BTN_COLOR,
                  fontSize: Constants.FONT_SIZE.M,
                  marginTop: 20,
                }}>
                {' '}
                Register
              </Text>
            </View>
          </TouchableOpacity>
          {/* </KeyboardAwareScrollView> */}
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
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: Constants.COLOR.PRIMARY_COLOR,
  },
  loginLog: {
    height: deviceWidth / 3,
    width: deviceWidth / 2,
    marginTop: deviceHeight / 9,
    alignSelf: 'center',
  },
  tilteView: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  loginLable: {
    fontSize: Constants.FONT_SIZE.ANALYTICS,
    color: Constants.COLOR.LABLE_COLOR,
    paddingVertical: 12,

    textAlign: 'center',
    marginTop: 10,
  },
});
