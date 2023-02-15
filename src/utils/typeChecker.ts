import { ComponentType, isValidElement, ReactNode } from 'react';

const isReactNode = (element?: ComponentType | ReactNode): element is ReactNode => {
  return isValidElement(element)
    || element === null
    || ['number', 'string', 'boolean', 'undefined'].includes(typeof element);
};

export default {
  isReactNode,
};
