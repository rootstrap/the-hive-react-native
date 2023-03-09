import React from 'react';
import RNDatePicker from 'react-native-date-picker';

import { Icon, Text, Touchable } from 'design-system';

import styles from './styles';
import { DatePickerTypes } from './types';

const DatePicker: React.FunctionComponent<DatePickerTypes> = ({
  isDatePickerOpen,
  setIsDatePickerOpen,
  date,
  setDate,
  maximumDate,
  label,
  required,
  containerSx,
}) => (
  <>
    {!!label && (
      <Text sx={styles.label}>
        {label}
        {required && <Text sx={styles.required}> *</Text>}
      </Text>
    )}
    <Touchable
      sx={{ ...styles.container, ...containerSx }}
      onPress={() => setIsDatePickerOpen(true)}>
      <Text sx={styles.date}>{date.toLocaleDateString('en-US')}</Text>
      <Icon name="calendar" />
    </Touchable>
    <RNDatePicker
      modal
      mode="date"
      maximumDate={maximumDate}
      open={isDatePickerOpen}
      date={date}
      onConfirm={newDate => {
        setIsDatePickerOpen(false);
        setDate(newDate);
      }}
      onCancel={() => {
        setIsDatePickerOpen(false);
      }}
    />
  </>
);

export default DatePicker;
