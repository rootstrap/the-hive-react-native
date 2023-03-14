import strings from 'localization';

import type { Validations } from 'constants/validations';

export type Fields = {
  displayName: string;
};

export const validations: Validations<Fields> = {
  displayName: {
    required: {
      value: true,
      message: strings.SIGN_UP.CREATE_ACCOUNT.blankDisplayNameError,
    },
    maxLength: {
      value: 64,
      message: strings.SIGN_UP.CREATE_ACCOUNT.maxLengthDisplayNameError,
    },
  },
};
