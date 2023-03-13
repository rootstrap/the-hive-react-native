import React from 'react';
import { TouchableOpacity } from 'react-native';
import RNDatePicker from 'react-native-date-picker';

import { Icon, Text } from 'design-system';
import { useSx } from 'dripsy';

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
}) => {
  const sx = useSx();

  return (
    <>
      {!!label && (
        <Text variant="p-md-regular" sx={styles.label}>
          {label}
          {required && (
            <Text variant="p-md-regular" sx={styles.required}>
              {' '}
              *
            </Text>
          )}
        </Text>
      )}
      <TouchableOpacity
        style={sx({ ...styles.container, ...containerSx })}
        onPress={() => setIsDatePickerOpen(true)}>
        <Text variant="p-md-regular" sx={styles.date}>
          {date.toLocaleDateString('en-US')}
        </Text>
        <Icon name="calendar" />
      </TouchableOpacity>
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
};

export default DatePicker;
