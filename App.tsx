import React from 'react';
import KeyboardManager from 'react-native-keyboard-manager';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { DripsyProvider } from 'dripsy';

import { DEFAULT_DISTANCE_FROM_TEXT, IS_IOS } from 'constants/general';

import { theme } from 'design-system/theme';

import NavigationStack from 'navigation';

const client = new QueryClient();

if (IS_IOS) {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableAutoToolbar(false);
  KeyboardManager.setKeyboardDistanceFromTextField(DEFAULT_DISTANCE_FROM_TEXT);
}

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <DripsyProvider theme={theme}>
          <NavigationStack />
        </DripsyProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
