'use strict';

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import RouteNavigator from './app/routes/index';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
/**
 * Gets the store and registered scenes and sets that to provider
 */

// const translationGetters = {
//   en: () => require('./app/locales/en.json'),
//   nl: () => require('./app/locales/nl.json'),
// };
// const translate = memoize(
//   (key, config) => i18n.t(key, config),
//   (key, config) => (config ? key + JSON.stringify(config) : key),
// );

// const setI18nConfig = () => {
//   const fallback = {languageTag: 'en'};
//   const {languageTag} =
//     RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
//     fallback;
//   translate.cache.clear();
//   i18n.translations = {[languageTag]: translationGetters[languageTag]()};
//   i18n.locale = languageTag;
// };

class App extends Component {
  constructor(props) {
    super(props);
    // setI18nConfig();
  }

  // componentDidMount() {
  //   RNLocalize.addEventListener('change', this.handleLocalizationChange);
  // }
  // componentWillUnmount() {
  //   RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  // }

  // handleLocalizationChange = () => {
  //   setI18nConfig().then(() => this.forceUpdate())
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  render() {
    return (
      <Provider store={store}>
        <RouteNavigator />
      </Provider>
    );
  }
}

export default App;
