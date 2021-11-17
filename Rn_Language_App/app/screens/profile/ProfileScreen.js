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
import Container from '../../components/Container';
import Constants from '../../utils/Constants';
import Utility from '../../utils/Utility';
import {Avatar} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const deviceHeight = Utility.isiPhoneX()
  ? Constants.SCREEN_SIZE.PLUS_SIZE
  : Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class ProfileScreen extends Component {
  _renderScreenTitle = () => {
    return (
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text
          style={{
            flex: 1,
            color: Constants.COLOR.WHITE_COLOR,
            fontSize: Constants.FONT_SIZE.TITLE,
            textAlign: 'center',
          }}>
          My Profile
        </Text>
      </View>
    );
  };
  render() {
    return (
      <Container bottomColor={Constants.COLOR.PRIMARY_COLOR}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderBottomLeftRadius: 37.43,
            borderBottomRightRadius: 37.43,
            backgroundColor: Constants.COLOR.THEME_COLOR,
            paddingBottom: 10,
            paddingHorizontal: 35,
          }}>
          {/* {this._renderBackButton()}*/}
          {this._renderScreenTitle()}
          <View style={{height: 10, width: 10}} />
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 30,
          }}>
          <View
            style={{
              paddingTop: deviceHeight / 20.56,
              flex: 1,
              marginHorizontal: deviceWidth / 14.56,
            }}>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginLeft: -15,
                marginTop: -10,
              }}
              onPress={() => {}}>
              <Avatar
                size={'large'}
                rounded
                containerStyle={{
                  alignSelf: 'center',
                }}
                renderPlaceholderContent={
                  <Avatar
                    size={'large'}
                    source={require('../../assets/image/profileImg.png')}
                  />
                }
                source={require('../../assets/image/profileImg.png')}
              />
              <View
                style={{
                  padding: 5,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  position: 'absolute',
                  right: -10,
                  top: 25,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 2,
                    height: 10,
                  },
                  shadowOpacity: 0.7,
                  shadowRadius: 13.16,
                  elevation: 20,
                }}>
                <Image
                  resizeMode={'contain'}
                  source={require('../../assets/image/camera.png')}
                  style={{
                    height: 12,
                    width: 12,
                    alignSelf: 'center',
                    tintColor: '#171717',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: Constants.FONT_SIZE.L,
              color: Constants.COLOR.LABLE_COLOR,
              fontWeight: 'bold',
            }}>
            Mira Suxi
          </Text>
          <Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: Constants.FONT_SIZE.S,
              color: Constants.COLOR.LABLE_COLOR,
              paddingVertical: 10,
            }}>
            Writer
          </Text>
        </View>

        <View
          style={{flexDirection: 'row', marginTop: 25, marginHorizontal: 15}}>
          <View
            style={{flexDirection: 'column', flex: 1, marginHorizontal: 10}}>
            <Text
              style={{
                color: Constants.COLOR.FONT_PRIMARY,
                fontSize: Constants.FONT_SIZE.M,
                marginHorizontal: 10,
              }}>
              First Name
            </Text>
            <View style={styles.subViewListContainer}>
              <Text
                style={{
                  color: Constants.COLOR.FONT_PRIMARY,
                  fontSize: Constants.FONT_SIZE.M,
                  marginHorizontal: 10,
                  textAlign: 'left',

                  marginTop: 15,
                }}>
                Venu
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text
              style={{
                color: Constants.COLOR.FONT_PRIMARY,
                fontSize: Constants.FONT_SIZE.M,
                marginHorizontal: 10,
              }}>
              Last Name
            </Text>
            <View style={styles.subViewListContainer}>
              <Text
                style={{
                  color: Constants.COLOR.FONT_PRIMARY,
                  fontSize: Constants.FONT_SIZE.M,
                  marginHorizontal: 10,
                  textAlign: 'left',

                  marginTop: 15,
                }}>
                Gopal
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 15}}>
          <View
            style={{flexDirection: 'column', flex: 1, marginHorizontal: 10}}>
            <Text
              style={{
                color: Constants.COLOR.FONT_PRIMARY,
                fontSize: Constants.FONT_SIZE.M,
                marginHorizontal: 10,
              }}>
              DOB
            </Text>
            <View style={styles.subViewListContainer}>
              <Text
                style={{
                  color: Constants.COLOR.FONT_PRIMARY,
                  fontSize: Constants.FONT_SIZE.M,
                  marginHorizontal: 10,
                  textAlign: 'left',

                  marginTop: 15,
                }}>
                22/07/1992
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text
              style={{
                color: Constants.COLOR.FONT_PRIMARY,
                fontSize: Constants.FONT_SIZE.M,
                marginHorizontal: 10,
              }}>
              Sex
            </Text>
            <View style={styles.subViewListContainer}>
              <Text
                style={{
                  color: Constants.COLOR.FONT_PRIMARY,
                  fontSize: Constants.FONT_SIZE.M,
                  marginHorizontal: 10,
                  textAlign: 'left',

                  marginTop: 15,
                }}>
                Male
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 15}}>
          <View
            style={{flexDirection: 'column', flex: 1, marginHorizontal: 10}}>
            <Text
              style={{
                color: Constants.COLOR.FONT_PRIMARY,
                fontSize: Constants.FONT_SIZE.M,
                marginHorizontal: 10,
              }}>
              Location
            </Text>
            <View style={styles.subViewListContainer}>
              <Text
                style={{
                  color: Constants.COLOR.FONT_PRIMARY,
                  fontSize: Constants.FONT_SIZE.M,
                  marginHorizontal: 10,
                  textAlign: 'left',

                  marginTop: 15,
                }}>
                chennai
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 15}}>
          <View
            style={{flexDirection: 'column', flex: 1, marginHorizontal: 10}}>
            <Text
              style={{
                color: Constants.COLOR.FONT_PRIMARY,
                fontSize: Constants.FONT_SIZE.M,
                marginHorizontal: 10,
              }}>
              Email
            </Text>
            <View style={styles.subViewListContainer}>
              <Text
                style={{
                  color: Constants.COLOR.FONT_PRIMARY,
                  fontSize: Constants.FONT_SIZE.M,
                  marginHorizontal: 10,
                  textAlign: 'left',

                  marginTop: 15,
                }}>
                vchandrasekar@concertcare.com
              </Text>
            </View>
          </View>
        </View>

        {/*        
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 25,
              marginVertical: 5,
              paddingVertical: 30,
              marginHorizontal: 20,
              marginTop: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                //paddingVertical: 15,
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 3,
                  flexDirection: 'column',
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'SofiaPro-Bold',
                    fontSize: Constants.FONT_SIZE.M,
                    color: '#333132',
                    //lineHeight: 18,
                  }}>
                 Privacy
                </Text>
              </View>
            </View>
          </View> */}

        {/* <View
          
          style={{
            backgroundColor: 'red',
            borderTopLeftRadius: 37.43,
            borderTopRightRadius: 37.43,
            flex: 1,
            minHeight: deviceHeight / 1.3,
          }}>
        
        </View> */}
      </Container>
    );
  }
}
// define your styles
const styles = StyleSheet.create({
  subViewListContainer: {
    borderRadius: 15,
    height: 55,
    backgroundColor: Constants.COLOR.WHITE_COLOR,
    borderWidth: 1,
    borderColor: '#E6E7E8',
    marginVertical: 10,
  },
  textInput: {
    color: '#1A1A1A',
    flex: 1,
    backgroundColor: Constants.COLOR.WHITE_COLOR,
    paddingVertical: deviceHeight / 80,
    marginHorizontal: 20,
    fontFamily: 'SofiaPro-Regular',
    fontSize: Constants.FONT_SIZE.M,
  },
});
