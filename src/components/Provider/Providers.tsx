import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
