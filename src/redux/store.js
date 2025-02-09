import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currency/slice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});