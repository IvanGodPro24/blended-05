import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currency/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filter/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['baseCurrency'],
};

const persistedReducer = persistReducer(persistConfig, currencyReducer);

export const store = configureStore({
  reducer: {
    currency: persistedReducer,
    filters: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
