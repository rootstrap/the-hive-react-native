import React, { ComponentProps, useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { TextInput, View } from 'dripsy';

import { Icon } from '../Icon';
import { Text } from '../Text';
import styles from './styles';
import { TextInputProps, TextInputStates } from './types';

// TODO Update according to theme
const getContentStyles = ({ isInvalid, isFocused, isSuccess }: TextInputStates) => {
  const invalidColor = isInvalid ? '$TextInput-Error' : undefined;
  const successColor = isSuccess ? '$TextInput-Success' : undefined;
  const focusColor = isFocused ? '$TextInput-Focus' : undefined;
  const currentColor = invalidColor ?? successColor ?? focusColor ?? '$TextInput-Border';

  return {
    ...styles.content,
    borderColor: currentColor,
    shadowColor: currentColor,
    shadowOpacity: isInvalid || isFocused || isSuccess ? 0.5 : 0,
  };
};

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

  const _onChangeText: ComponentProps<typeof RNTextInput>['onChangeText'] = value => {
    if (!onChangeText) return;

    if (pattern) {
      const isValid = pattern.test(value);
      onChangeText(isValid ? value : value.slice(0, -1));
    } else {
      onChangeText(value);
    }
  };

  const isInvalid = Boolean(error);

  const defaultOnPressIcon = () => setToggle(prev => !prev);

  return (
    <View sx={containerSx}>
      {name && (
        <Text variant="text-base" sx={{ ...styles.name, ...nameSx }}>
          {name} {isRequired && '*'}
        </Text>
      )}
      <View sx={{ ...getContentStyles({ isFocused, isInvalid, isSuccess }), ...contentSx }}>
        {!!leftIconProps?.name && (
          <Icon containerSx={styles.leftIcon} onPress={defaultOnPressIcon} {...leftIconProps} />
        )}

        <TextInput
          ref={ref}
          variant="text.text-base"
          sx={{ ...styles.input, ...inputSx }}
          placeholderTextColor="#2A2F39"
          secureTextEntry={toggle}
          onFocus={_onFocus}
          onBlur={_onBlur}
          onChangeText={_onChangeText}
          {...props}
        />
        {secureTextEntry && (
          <Icon name="show" containerSx={styles.toggle} onPress={defaultOnPressIcon} />
        )}
      </View>
      {isInvalid && !hideError && <Text sx={{ ...styles.error, ...errorSx }}>{error}</Text>}
    </View>
  );
};

const Input = React.forwardRef(ForwardInputRefFunction);

export { Input };
