import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard, ScrollView } from 'react-native';

import auth from '@react-native-firebase/auth';

import { Icon, Input, Text } from 'design-system';
import { SafeAreaView, View, useSx } from 'dripsy';

import Button from 'common/Button';
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
        setError('email', { type: 'custom', message: 'This email is already in use' });
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

  return (
    <SafeAreaView sx={styles.container}>
      <View sx={styles.header}>
        <Icon name="cross" onPress={() => pop()} containerSx={styles.back} />
        <ProgressBar currentStep={CURRENT_STEP} totalSteps={TOTAL_ACCOUNT_SETUP_STEPS} />
      </View>
      <ScrollView style={sx({ ...styles.container, ...styles.content })}>
        <Text sx={styles.title}>Welcome to the hive</Text>
        <Text sx={styles.description}>Create your account, and start finding your hive.</Text>
        <FormInput
          id="email"
          name="Email"
          placeholder="example@email.com"
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
          label="Birth Date"
          containerSx={styles.inputContainer}
        />
        <FormInput
          id="password"
          name="Password"
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
          name="Confirm Password"
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
        <Button
          title={isLoading ? 'Loading...' : 'Continue'}
          onPress={onPress}
          disabled={email === '' || password === '' || passwordConfirmation === ''}
        />
        {!!connectionError && (
          <Text>
            Something went wrong.
            {connectionError.includes(NETWORK_ERROR) ? ' Check your internet connection.' : ''}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
