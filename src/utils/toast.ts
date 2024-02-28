import { Animated } from 'react-native';
import { Notifier } from 'react-native-notifier';

import StatusToast, { StatusToastProps } from 'src/core/components/StatusToast';

import LOGS from 'src/constants/logs';
import hapticFeedback from './hapticFeedback';

type ShowToastArgs = StatusToastProps & {
  duration?: number
};
const showMessage = ({
  type,
  title,
  description,
  duration,
}: ShowToastArgs) => {
  Notifier.showNotification({
    duration: duration || 5000,
    showAnimationDuration: 300,
    hideOnPress: true,
    queueMode: 'reset',
    componentProps: {
      type,
      title,
      description,
    } as StatusToastProps,
    Component: StatusToast,
    containerStyle: (translateY: Animated.Value) => ({
      paddingTop: 32,
      alignItems: 'center',
      transform: [
        {
          translateY: translateY.interpolate({
            inputRange: [-1, 0, 20],
            outputRange: [-1, 0, 1],
          }),
        },
      ],
    }),
    onShown: () => {
      switch (type) {
        case 'error':
          hapticFeedback.notificationError();
          break;
        case 'warning':
          hapticFeedback.notificationWarning();
          break;
        default:
          hapticFeedback.notificationSuccess();
      }
    },
  });
};

const showErrorMessage = (description?: string, duration?: number) => {
  showMessage({
    type: 'error',
    description: description || LOGS.DEFAULT_ERROR_MESSAGE,
    duration,
  });
};

const showSuccessMessage = (description: string, duration?: number) => {
  showMessage({
    type: 'success',
    description,
    duration,
  });
};

const showWarningMessage = (description: string, duration?: number) => {
  showMessage({
    type: 'warning',
    description,
    duration,
  });
};

const hideMessage = () => {
  Notifier.hideNotification();
};

export default {
  showMessage,
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
  hideMessage,
};
