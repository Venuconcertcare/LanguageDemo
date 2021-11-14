
import {Alert, Dimensions, Platform, PixelRatio} from 'react-native';

import {Actions} from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');

export default class Utility {
  /**
   * Finds the device
   * @returns boolean value
   */
   static isiPhoneX() {
    if (height === 812) {
      // iPhone X / iPhone XS
      return true;
    } else if (height === 896) {
      // iPhone XS Max / iPhone XR
      return true;
    } else {
      return false;
    }
  }
}