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
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginScreen from '../screens/login/LoginScreen';

class Main extends Component {
    constructor(props) {
      super(props);
  
      this.handleOpenURL = this.handleOpenURL.bind(this);
      Linking.getInitialURL()
        .then((url) => this.handleOpenURL({url, isInitURL: true}))
        .catch((e) => {});
    }
    render()
    {
        return(
            <View  style={{flex: 1, backgroundColor: 'red'}}>
              <Scene key={'login'} component={LoginScreen} type={ActionConst.RESET} />
            </View>
        )
           
          
        
    }

}


const mapStateToProps = (state, props) => {
    return {};
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        // resetDeepLinkData,
        // handleDeeplinking,
      },
      dispatch,
    );
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main);