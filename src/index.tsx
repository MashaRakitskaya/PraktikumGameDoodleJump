import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = document.getElementById('root') as HTMLElement;
hydrateRoot(
  root,
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
