import I18n from 'react-native-i18n';
import en from './locales/en';
import nl from './locales/nl';

I18n.fallbacks = true;

I18n.translations = {
  en,
  nl,
};

export default I18n;
