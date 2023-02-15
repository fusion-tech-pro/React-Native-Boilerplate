import i18n, { TranslateOptions } from 'i18n-js';

import ru from './ru.json';

const translate = (key: TxKeyPath, options?: i18n.TranslateOptions) => {
  return key ? i18n.t(key, options) : key;
};

export default translate;

export type TxOptions = TranslateOptions;

type DefaultLocale = typeof ru;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
}[keyof TObj & (string | number)]

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >
}[keyof TObj & (string | number)]

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text

translate('signInScreen.title');
