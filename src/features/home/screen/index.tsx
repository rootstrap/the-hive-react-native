import React, { FunctionComponent, useCallback } from 'react';

import auth from '@react-native-firebase/auth';
import { useFocusEffect } from '@react-navigation/native';

import { Text, Touchable } from 'design-system';
import { SafeAreaView } from 'dripsy';

import { GlobalStore } from 'storage/stores';

import styles from './styles';
import type { HomePropTypes } from './types';

const HomeScreen: FunctionComponent<HomePropTypes> = ({ navigation: { navigate } }) => {
  useFocusEffect(
    useCallback(() => {
      const createdUser = GlobalStore.createdUser.useValue();
      if (createdUser) {
        navigate('CreateAccountSuccess', {
          emoji: createdUser.emoji,
          displayName: createdUser.displayName,
        });
        GlobalStore.createdUser.delete();
      }
    }, []),
  );

  return (
    <SafeAreaView sx={styles.container}>
      <Text accessibilityRole="text">Home Screen</Text>
      <Touchable onPress={() => auth().signOut()}>Log out</Touchable>
    </SafeAreaView>
  );
};

export default HomeScreen;
