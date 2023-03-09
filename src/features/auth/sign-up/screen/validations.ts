import { UseFormReturn } from 'react-hook-form';

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
      message: "Email can't be blank.",
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'The email has a wrong format.',
    },
  },
  password: {
    required: {
      value: true,
      message: "Password can't be blank.",
    },
    minLength: {
      value: 6,
      message: 'Password must have at least 6 characters.',
    },
  },
  passwordConfirmation: {
    required: {
      value: true,
      message: "Password confirmation can't be blank.",
    },
    validate: (passwordConfirmation = '') => {
      const password = watch('password');

      return (
        password === passwordConfirmation ||
        'The password confirmation does not match with the password.'
      );
    },
  },
});

export { getValidations };
