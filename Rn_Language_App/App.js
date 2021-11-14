'use strict';

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {persist, store} from './app/store';
import {PersistGate} from 'redux-persist/integration/react';
import RouteNavigator from './app/routes/index';
import LoginScreen from './app/screens/login/LoginScreen';

/**
 * Gets the store and registered scenes and sets that to provider
 */
class App extends Component {
  render() {
    return (
   
      <Provider store={store}>
        <PersistGate loading={<LoginScreen />} persistor={persist}>
          <RouteNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;