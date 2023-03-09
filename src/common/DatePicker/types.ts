import { Dispatch, SetStateAction } from 'react';

import { SxProp } from 'dripsy';

export type DatePickerTypes = {
  isDatePickerOpen: boolean;
  setIsDatePickerOpen: Dispatch<SetStateAction<boolean>>;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  maximumDate?: Date;
  label?: string;
  required: boolean;
  containerSx?: SxProp;
};
