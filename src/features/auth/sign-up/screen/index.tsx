import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard, ScrollView } from 'react-native';

import auth from '@react-native-firebase/auth';

import { Icon, Input, Text, Touchable } from 'design-system';
import { SafeAreaView, View, useSx } from 'dripsy';
import strings from 'localization';

import DatePicker from 'common/DatePicker';
import ProgressBar from 'common/ProgressBar';
import withControllerHOC from 'common/withControllerHOC';

import { NETWORK_ERROR, TOTAL_ACCOUNT_SETUP_STEPS } from 'constants/general';

import styles from './styles';
import { SignUpPropTypes } from './types';
import { Fields, getValidations } from './validations';

export type OnSubmit = SubmitHandler<Fields>;
const FormInput = withControllerHOC<Fields>(Input);

const CURRENT_STEP = 1;
const MINIMUM_AGE = 18;
const today = new Date();
const maximumDate = new Date(today.setFullYear(today.getFullYear() - MINIMUM_AGE));

const SignUpScreen: React.FunctionComponent<SignUpPropTypes> = ({
  navigation: { navigate, pop },
}) => {
  const [dateOfBirth, setDateOfBirth] = useState(maximumDate);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  const { control, setFocus, handleSubmit, watch, setError } = useForm<Fields>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });
  const validations = getValidations({ watch });
  const { email, password, passwordConfirmation } = watch();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const signInMethods = await auth().fetchSignInMethodsForEmail(email);
      setConnectionError(null);
      if (signInMethods.length > 0) {
        setError('email', { type: 'custom', message: strings.SIGN_UP.alreadyUsedEmailError });
        return;
      }
      navigate('CreateAccount');
    } catch (error) {
      setConnectionError((error as any)?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  const sx = useSx();
  const disabled = email === '' || password === '' || passwordConfirmation === '';

  return (
    <SafeAreaView sx={styles.container}>
      <View sx={styles.header}>
        <Icon name="cross" onPress={() => pop()} containerSx={styles.back} />
        <ProgressBar currentStep={CURRENT_STEP} totalSteps={TOTAL_ACCOUNT_SETUP_STEPS} />
      </View>
      <ScrollView style={sx({ ...styles.container, ...styles.content })}>
        <Text variant="h3" sx={styles.title}>
          {strings.SIGN_UP.welcome}
        </Text>
        <Text variant="p-md-regular" sx={styles.description}>
          {strings.SIGN_UP.description}
        </Text>
        <FormInput
          id="email"
          name={strings.SIGN_UP.email}
          placeholder={strings.SIGN_UP.emailPlaceholder}
          control={control}
          containerSx={styles.inputContainer}
          rules={validations.email}
          onSubmitEditing={() => setIsDatePickerOpen(true)}
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          isRequired
        />
        <DatePicker
          isDatePickerOpen={isDatePickerOpen}
          setIsDatePickerOpen={setIsDatePickerOpen}
          date={dateOfBirth}
          setDate={newDate => {
            setDateOfBirth(newDate);
            setFocus('password');
          }}
          maximumDate={maximumDate}
          required
          label={strings.SIGN_UP.birthDate}
          containerSx={styles.inputContainer}
        />
        <FormInput
          id="password"
          name={strings.SIGN_UP.password}
          control={control}
          containerSx={styles.inputContainer}
          rules={validations.password}
          onSubmitEditing={() => setFocus('passwordConfirmation')}
          returnKeyType="done"
          secureTextEntry
          isRequired
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          id="passwordConfirmation"
          name={strings.SIGN_UP.passwordConfirmation}
          control={control}
          rules={validations.passwordConfirmation}
          onSubmitEditing={onPress}
          returnKeyType="done"
          secureTextEntry
          isRequired
          autoCapitalize="none"
          autoCorrect={false}
        />
      </ScrollView>
      <View sx={styles.content}>
        <Touchable
          testID="continue-register-button"
          accessibilityState={{
            disabled,
          }}
          disabled={disabled}
          onPress={onPress}>
          {isLoading ? strings.COMMON.loading : strings.SIGN_UP.continue}
        </Touchable>
        {!!connectionError && (
          <Text variant="text-sm" sx={styles.error}>
            {strings.COMMON.somethingWentWrong}
            {connectionError.includes(NETWORK_ERROR) ? `. ${strings.COMMON.connectionError}.` : ''}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
