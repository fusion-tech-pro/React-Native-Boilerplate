import { RefObject, useRef } from 'react';
import { TextInput } from 'react-native';

export type InputRef = RefObject<TextInput>;

const useInputRef = () => {
  const inputRef = useRef<TextInput>(null);
  return inputRef;
};

export default useInputRef;
