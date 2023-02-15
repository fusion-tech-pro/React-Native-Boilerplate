import { Colors } from 'src/types/app';

import ErrorIcon from 'src/assets/icons/error.svg';
import WarningIcon from 'src/assets/icons/warning.svg';
import SuccessIcon from 'src/assets/icons/success.svg';
import InfoIcon from 'src/assets/icons/info.svg';

import { StatusToastType } from './StatusToast.constants';

export const getToastIcon = (type?: StatusToastType) => {
  switch (type) {
    case 'error':
      return ErrorIcon;
    case 'warning':
      return WarningIcon;
    case 'success':
      return SuccessIcon;
    case 'info':
    default:
      return InfoIcon;
  }
};

export const getToastTitle = (type?: StatusToastType, title?: string) => {
  if (title) {
    return title;
  }

  switch (type) {
    case 'error':
      return 'Error';
    case 'warning':
      return 'Warning';
    case 'success':
      return 'Success';
    case 'info':
    default:
      return 'Info';
  }
};

export const getToastStatusColor = (
  colors: Colors,
  type?: StatusToastType,
) => {
  switch (type) {
    case 'error':
      return colors.danger;
    case 'warning':
      return colors.warning;
    case 'success':
      return colors.success;
    default:
      return colors.info;
  }
};
