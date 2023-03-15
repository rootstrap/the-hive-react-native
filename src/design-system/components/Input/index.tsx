import React, { ComponentProps, useCallback, useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { TextInput, View } from 'dripsy';

import { Icon } from '../Icon';
import { Text } from '../Text';
import styles from './styles';
import { DefaultColors, TextInputProps } from './types';

const ForwardInputRefFunction: React.ForwardRefRenderFunction<RNTextInput, TextInputProps> = (
  {
    name,
    error,
    pattern,
    isSuccess,
    containerSx,
    contentSx,
    inputSx,
    nameSx,
    errorSx,
    secureTextEntry,
    isRequired,
    onFocus,
    onBlur,
    onChangeText,
    hideError,
    leftIconProps,
    value,
    ...props
  },
  ref,
) => {
  const [toggle, setToggle] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const _onFocus: ComponentProps<typeof RNTextInput>['onFocus'] = e => {
    if (onFocus) onFocus(e);
    setIsFocused(true);
  };

  const _onBlur: ComponentProps<typeof RNTextInput>['onBlur'] = e => {
    if (onBlur) onBlur(e);
    setIsFocused(false);
  };

  const _onChangeText: ComponentProps<typeof RNTextInput>['onChangeText'] = newValue => {
    if (!onChangeText) return;

    if (pattern) {
      const isValid = pattern.test(newValue);
      onChangeText(isValid ? newValue : newValue.slice(0, -1));
    } else {
      onChangeText(newValue);
    }
  };

  const isInvalid = Boolean(error);
  const showError = isInvalid && !hideError;
  const isFilled = !!value;

  const defaultOnPressIcon = () => setToggle(prev => !prev);

  const getCurrentColor = useCallback(
    ({
      error: errorColor = 'error-500',
      success = 'success-500',
      focus = 'primary-500',
      filled = 'n-600',
      default: defaultColor = 'n-600',
    }: DefaultColors = {}) => {
      const invalidColor = showError ? errorColor : undefined;
      const successColor = isSuccess ? success : undefined;
      const focusColor = isFocused ? focus : undefined;
      const filledColor = isFilled ? filled : undefined;
      const currentColor =
        focusColor ?? invalidColor ?? successColor ?? filledColor ?? defaultColor;

      return currentColor;
    },
    [isFilled, isFocused, isSuccess, showError],
  );

  return (
    <View sx={containerSx}>
      {name && (
        <View
          sx={{
            backgroundColor: isFocused ? 'primary-500' : 'transparent',
            ...styles.name,
          }}>
          <Text
            variant="p-md-regular"
            sx={{
              color: getCurrentColor({
                error: 'error-700',
                success: 'success-700',
                focus: 'white',
              }),
              ...nameSx,
            }}>
            {name}
          </Text>
          {isRequired && (
            <Text
              variant="p-md-regular"
              sx={{
                ...styles.required,
                color: getCurrentColor({
                  focus: 'white',
                  filled: 'error-500',
                  default: 'error-500',
                }),
                ...nameSx,
              }}>
              *
            </Text>
          )}
        </View>
      )}
      <View
        sx={{
          ...styles.content,
          borderColor: getCurrentColor({
            filled: 'primary-300',
            default: 'n-400',
          }),
          ...contentSx,
        }}>
        {!!leftIconProps?.name && (
          <Icon containerSx={styles.leftIcon} onPress={defaultOnPressIcon} {...leftIconProps} />
        )}
        <TextInput
          ref={ref}
          variant="text.p-md-regular"
          sx={{
            ...styles.input,
            color: getCurrentColor({
              error: 'black',
              success: 'black',
              focus: 'black',
              filled: 'black',
              default: 'n-600',
            }),
            ...inputSx,
          }}
          placeholderTextColor="#2A2F39"
          secureTextEntry={toggle}
          onFocus={_onFocus}
          onBlur={_onBlur}
          onChangeText={_onChangeText}
          value={value}
          {...props}
        />
        {secureTextEntry && (
          <Icon name="show" containerSx={styles.toggle} onPress={defaultOnPressIcon} />
        )}
      </View>
      {showError && (
        <Text variant="text-sm" sx={{ ...styles.error, ...errorSx }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const Input = React.forwardRef(ForwardInputRefFunction);

export { Input };
