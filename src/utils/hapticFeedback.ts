import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const impactSoft = () => {
  ReactNativeHapticFeedback.trigger('soft');
};

const impactLight = () => {
  ReactNativeHapticFeedback.trigger('impactLight');
};

const impactMedium = () => {
  ReactNativeHapticFeedback.trigger('impactMedium');
};

const impactHeavy = () => {
  ReactNativeHapticFeedback.trigger('impactHeavy');
};

const notificationSuccess = () => {
  ReactNativeHapticFeedback.trigger('notificationSuccess');
};

const notificationWarning = () => {
  ReactNativeHapticFeedback.trigger('notificationWarning');
};

const notificationError = () => {
  ReactNativeHapticFeedback.trigger('notificationError');
};

export default {
  impactSoft,
  impactLight,
  impactMedium,
  impactHeavy,
  notificationSuccess,
  notificationWarning,
  notificationError,
};
