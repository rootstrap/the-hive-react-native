import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { DripsyProvider } from 'dripsy';

import { theme } from 'design-system/theme';

import NavigationStack from 'navigation';

const client = new QueryClient();

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
