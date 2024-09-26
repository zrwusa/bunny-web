'use client';

import { queryClient } from 'shared/api';
import { QueryClientProvider } from '@tanstack/react-query';

export interface ReactQueryProviderProps {
  children: React.ReactNode;
}
export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
