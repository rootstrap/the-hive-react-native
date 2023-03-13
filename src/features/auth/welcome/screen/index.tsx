import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { Touchable } from 'design-system';
import { SafeAreaView, View } from 'dripsy';

import styles from './styles';
import { WelcomePropTypes } from './types';

const WelcomeScreen: React.FunctionComponent<WelcomePropTypes> = ({ navigation: { navigate } }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const onSignInPress = () => navigate('SignIn');
  const onSignUpPress = () => navigate('SignUp');

  return (
    <SafeAreaView sx={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View sx={styles.buttonsContainer}>
        <Touchable
          testID="dummy-button"
          accessibilityState={{ disabled: false }}
          onPress={onSignInPress}>
          Register
        </Touchable>
        <Touchable
          testID="dummy-button"
          accessibilityState={{ disabled: false }}
          containerSx={{ marginTop: 16 }}
          onPress={onSignUpPress}
          variant="secondary">
          Login
        </Touchable>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
