'use client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6200ee',
    },
    secondary: {
      main: '#03dac6',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
}
