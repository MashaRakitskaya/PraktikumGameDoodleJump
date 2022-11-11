import React, { useEffect } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { StaticRouter } from 'react-router-dom/server';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ThemeProvider from './providers/ThemeProvider/ThemeProvider';

interface ServerProps {
  url: string;
  theme: any;
}

const newReducerWithFetchUser = {
  api: {
    queries: {
      'fetchUser(undefined)': {
        data: {
          first_name: ''
        }
      }
    }
  }
};

export const Server = ({ url, theme }: ServerProps) => {
  console.log('Server');

  const nextReducer = () => {
    return newReducerWithFetchUser;
  };

  store.replaceReducer(nextReducer as any);

  return (
    <Provider store={store}>
      <StaticRouter location={url}>
        <ThemeProvider>
          <App placeRendering={'server'} serverTheme={theme?.theme} />
        </ThemeProvider>
      </StaticRouter>
    </Provider>
  );
};

export const Client = () => {
  console.log('Client');

  const root = document.getElementById('root') as HTMLElement;

  //для того чтобы работали все слушатели хуки , для объдения разметки и реакта
  hydrateRoot(
    root,
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <App placeRendering={'client'} />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
