import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export const renderWithQueryProvider = Component => {
  const App = () => <QueryClientProvider client={client}>{Component}</QueryClientProvider>;

  return <App />;
};
