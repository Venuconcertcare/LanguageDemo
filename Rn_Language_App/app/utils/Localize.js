// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  'en-US': {
    firstName: 'First Name',
    lastName: 'Last Name',
    dob: 'DOB',
    location: 'Location',
    email: 'Email',
  },
  en: {
    firstName: 'First Name',
    lastName: 'Last Name',
    dob: 'DOB',
    location: 'Location',
    email: 'Email',
  },
  it: {
    firstName: 'First Name',
    lastName: 'Last Name',
    dob: 'DOB',
    location: 'Location',
    email: 'Email',
  },
});

export default strings;
