'use strict';

import React, {Component} from 'react';

import {
  Router,
  Scene,
  ActionConst,
  Tabs,
  Actions,
} from 'react-native-router-flux';
import {View, Linking} from 'react-native';
import LoginScreen from './screens/login/LoginScreen';
import SelectLanguageScreen from './screens/home/SelectLanguageScreen';
import ProfileScreen from './screens/profile/ProfileScreen';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  onBackPress = () => {
    if (Actions.state.index === 0) {
      return false;
    }
    Actions.pop();
    return true;
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Router backAndroidHandler={this.onBackPress}>
          <Scene key="root" hideNavBar>
            <Scene key={'login'} component={LoginScreen} initial />
            <Scene
              key={'selectlanguageScreen'}
              component={SelectLanguageScreen}
            />
            <Scene key={'profileScreen'} component={ProfileScreen} />
          </Scene>
        </Router>
      </View>
    );
  }
}

export default Main;
