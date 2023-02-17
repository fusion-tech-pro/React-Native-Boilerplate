import i18n, { TranslateOptions } from 'i18n-js';

import en from './en.json';

type DefaultLocale = typeof en;

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

type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
}[keyof TObj & (string | number)]

export type TxOptions = TranslateOptions;

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

const translate = (key: TxKeyPath, options?: i18n.TranslateOptions) => {
  return key ? i18n.t(key, options) : key;
};

export default translate;
