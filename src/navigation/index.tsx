import React, { useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import auth from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from 'design-system/theme';

import CreateAccountScreen from 'features/auth/create-account/screen';
import CreateAccountSuccessModal from 'features/auth/create-account/success-modal';
import SignInScreen from 'features/auth/sign-in/screen';
import SignUpScreen from 'features/auth/sign-up/screen';
import WelcomeScreen from 'features/auth/welcome/screen';

import Screens from 'navigation/types/screens';

import MainTabNav from './tabs';
import NavigationParamList from './types/navigation-param-list';

const AppStack = createNativeStackNavigator<NavigationParamList>();

const DEFAULT_OPTIONS = {
  headerShown: false,
  contentStyle: {
    backgroundColor: theme.colors.white,
  },
};

const NavigationStack: React.FunctionComponent = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(userData: any) {
    setUser(userData);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    setTimeout(() => RNBootSplash.hide({ fade: true }), 3000);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) return null;

  return (
    <AppStack.Navigator
      screenOptions={DEFAULT_OPTIONS}>
      {user ? (
        <>
          <AppStack.Screen
            options={DEFAULT_OPTIONS}
            name={Screens.MAIN_TAB}
            component={MainTabNav}
          />
          <AppStack.Group screenOptions={{ presentation: 'modal' }}>
            <AppStack.Screen
              name={Screens.CREATE_ACCOUNT_SUCCESS}
              component={CreateAccountSuccessModal}
            />
          </AppStack.Group>
        </>
      ) : (
        <AppStack.Group
          screenOptions={DEFAULT_OPTIONS}>
          <AppStack.Screen name={Screens.WELCOME} component={WelcomeScreen} />
          <AppStack.Screen name={Screens.SIGN_IN} component={SignInScreen} />
          <AppStack.Screen name={Screens.SIGN_UP} component={SignUpScreen} />
          <AppStack.Screen name={Screens.CREATE_ACCOUNT} component={CreateAccountScreen} />
        </AppStack.Group>
      )}
    </AppStack.Navigator>
  );
};

export * from './types';
export default NavigationStack;
