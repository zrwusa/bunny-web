import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Redirect, Session } from '../shared/components/auth/session';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import ReduxSagaProvider from 'shared/redux/provider';
import JwtHandler from './hooks/jwt-handler';
import { ReactQueryProvider } from './providers/react-query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bunny Web',
  description: 'Generated by Ruiwen Zeng, zrwaus@gmail.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxSagaProvider>
          <ReactQueryProvider>
            <ThemeProvider>
              <Session>
                <Redirect>
                  <JwtHandler />
                  {children}
                </Redirect>
              </Session>
            </ThemeProvider>
          </ReactQueryProvider>
        </ReduxSagaProvider>
      </body>
    </html>
  );
}
