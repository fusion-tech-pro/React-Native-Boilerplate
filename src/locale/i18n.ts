import * as Localization from 'react-native-localize';
import i18n from 'i18n-js';

import ru from './ru.json';
import en from './en.json';

i18n.fallbacks = true;
i18n.translations = { en, ru };

const locales = Localization.getLocales();
if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageCode || 'en';
}
