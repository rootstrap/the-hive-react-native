import { UseFormReturn } from 'react-hook-form';

import strings from 'localization';

import type { Validations } from 'constants/validations';

export type Fields = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

const getValidations = ({ watch }: Pick<UseFormReturn<Fields>, 'watch'>): Validations<Fields> => ({
  email: {
    required: {
      value: true,
      message: strings.SIGN_UP.blankEmailError,
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: strings.SIGN_UP.formatEmailError,
    },
  },
  password: {
    required: {
      value: true,
      message: strings.SIGN_UP.blankPasswordError,
    },
    minLength: {
      value: 6,
      message: strings.SIGN_UP.shortPasswordError,
    },
  },
  passwordConfirmation: {
    required: {
      value: true,
      message: strings.SIGN_UP.blankConfirmationError,
    },
    validate: (passwordConfirmation = '') => {
      const password = watch('password');

      return password === passwordConfirmation || strings.SIGN_UP.passwordsMustMatchError;
    },
  },
});

export { getValidations };
