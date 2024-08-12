import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Toaster } from '@/components/ui/toaster';
import translationEnglish from './locales/en.json';
import translationSpanish from './locales/es.json';
import { ThemeProvider } from './context';
import App from './App.tsx';
import './index.css';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: translationEnglish,
    },
    es: {
      translation: translationSpanish,
    },
  },
});

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

console.log(client)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <ApolloProvider client={client}>
        <I18nextProvider i18n={i18n}>
          <App />
          <Toaster />
        </I18nextProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);
