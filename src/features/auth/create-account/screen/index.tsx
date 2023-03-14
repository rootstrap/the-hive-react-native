import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard, ScrollView } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { Input, Text, Touchable } from 'design-system';
import { SafeAreaView, View, useSx } from 'dripsy';
import strings from 'localization';

import EmojiPicker from 'common/EmojiPicker';
import ProgressBar from 'common/ProgressBar';
import withControllerHOC from 'common/withControllerHOC';

import { Collections, UserFields } from 'constants/firebase';
import { TOTAL_ACCOUNT_SETUP_STEPS } from 'constants/general';

import { GlobalStore } from 'storage/stores';

import styles from './styles';
import { CreateAccountPropTypes } from './types';
import { Fields, validations } from './validations';

export type OnSubmit = SubmitHandler<Fields>;
const FormInput = withControllerHOC<Fields>(Input);

const CURRENT_STEP = 2;
const DEFAULT_EMOJI = '😄';

const CreateAccountScreen: React.FunctionComponent<CreateAccountPropTypes> = ({
  navigation: { pop },
  route: {
    params: { email, password, dateOfBirth },
  },
}) => {
  const sx = useSx();
  const [isLoading, setIsLoading] = useState(false);
  const [emoji, setEmoji] = useState(DEFAULT_EMOJI);
  const [somethingWentWrong, setSomethingWentWrong] = useState(false);

  const { control, handleSubmit, watch, setError } = useForm<Fields>({
    mode: 'onBlur',
    defaultValues: {
      displayName: '',
    },
  });
  const { displayName } = watch();

  const onSubmit = async () => {
    setIsLoading(true);
    setSomethingWentWrong(false);
    try {
      const query = await firestore()
        .collection(Collections.USERS)
        .where(UserFields.DISPLAY_NAME, '==', displayName)
        .get();
      if (!query.empty) {
        setIsLoading(false);
        setError('displayName', {
          type: 'custom',
          message: strings.SIGN_UP.CREATE_ACCOUNT.alreadyUsedDisplayName,
        });
        return;
      }
      GlobalStore.createdUser.setValue({ emoji, displayName });
      const { user } = await auth().createUserWithEmailAndPassword(email, password);
      auth().currentUser?.updateProfile({
        displayName,
        photoURL: emoji,
      });
      await firestore().collection(Collections.USERS).add({
        uid: user.uid,
        email,
        displayName,
        dateOfBirth,
        emoji,
      });
      setSomethingWentWrong(false);
    } catch (error) {
      setSomethingWentWrong(true);
      setIsLoading(false);
    }
  };

  const onPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  const disabled = displayName === '';

  return (
    <SafeAreaView sx={styles.container}>
      <View sx={styles.header}>
        <ProgressBar currentStep={CURRENT_STEP} totalSteps={TOTAL_ACCOUNT_SETUP_STEPS} />
      </View>
      <ScrollView style={sx({ ...styles.container, ...styles.content })}>
        <Text variant="h3" sx={styles.title}>
          {strings.SIGN_UP.CREATE_ACCOUNT.title}
        </Text>
        <Text variant="p-md-regular" sx={styles.description}>
          {strings.SIGN_UP.CREATE_ACCOUNT.description}
        </Text>
        <EmojiPicker emoji={emoji} containerSx={styles.emojiContainer} />
        <FormInput
          id="displayName"
          name={strings.SIGN_UP.CREATE_ACCOUNT.displayName}
          control={control}
          rules={validations.displayName}
          onSubmitEditing={onPress}
          autoCapitalize="none"
          autoCorrect={false}
          isRequired
          info={strings.SIGN_UP.CREATE_ACCOUNT.displayNameInfo}
        />
      </ScrollView>
      <View sx={styles.bottomContainer}>
        <View sx={styles.buttons}>
          <Touchable
            testID="back-button"
            variant="secondary"
            leftIcon="arrow-left"
            accessibilityState={{
              disabled: false,
            }}
            onPress={() => pop()}>
            {strings.SIGN_UP.CREATE_ACCOUNT.back}
          </Touchable>
          <Touchable
            testID="create-account-button"
            accessibilityState={{
              disabled,
            }}
            disabled={disabled}
            containerSx={styles.button}
            onPress={onPress}>
            {isLoading ? strings.COMMON.loading : strings.SIGN_UP.CREATE_ACCOUNT.createAccount}
          </Touchable>
        </View>
        {somethingWentWrong && (
          <Text variant="text-sm" sx={styles.error}>
            {strings.COMMON.somethingWentWrong}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;
