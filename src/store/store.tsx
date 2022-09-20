import { configureStore } from '@reduxjs/toolkit';
import baseApi from './api/baseApi';
import appReducer from '../redux/reducers';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    appReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([baseApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
