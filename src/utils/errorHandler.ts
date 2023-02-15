import LOGS from 'src/constants/logs';
import toast from './toast';

type LogParams = {
  extraData?: any;
  withToast?: boolean;
};

const logError = (
  message: keyof typeof LOGS,
  error: any,
  params?: LogParams,
) => {
  const logValue = LOGS[message as keyof typeof LOGS] || message;
  const errorMessage = `${logValue}_${LOGS.ERROR}`;
  const outputData = [error];

  if (params?.withToast) {
    toast.showErrorMessage(error?.data?.message || error.message);
  }

  if (params?.extraData) {
    outputData.push(params.extraData);
  }

  console.log(errorMessage, ...outputData);
};

export default {
  logError,
};
