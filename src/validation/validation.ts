import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import ERROR_MESSAGES from './errorMessages';

const EMAIL_VALIDATION = yup.string().strict()
  .email(ERROR_MESSAGES.EMAIL_INVALID)
  .required(ERROR_MESSAGES.EMAIL_MISSED);

const PASSWORD_VALIDATION = yup.string().strict().required(ERROR_MESSAGES.PASSWORD_MISSED);

export default {
  signIn: yupResolver(
    yup.object().shape({
      email: EMAIL_VALIDATION,
      password: PASSWORD_VALIDATION,
    }),
  ),
  signUp: yupResolver(
    yup.object().shape({
      email: EMAIL_VALIDATION,
      password: PASSWORD_VALIDATION,
      passwordConfirmation: yup.string().strict()
        .required(ERROR_MESSAGES.CONFIRM_PASSWORD_MISSED),
    }),
  ),
};
