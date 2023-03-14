import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateAccountScreen from 'features/auth/create-account/screen';
import SignInScreen from 'features/auth/sign-in/screen';
import SignUpScreen from 'features/auth/sign-up/screen';
import WelcomeScreen from 'features/auth/welcome/screen';

import { AuthStackParamList } from 'navigation/types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FunctionComponent = () => (
  <AuthStack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#FFFFFF',
      },
    }}>
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="CreateAccount" component={CreateAccountScreen} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
