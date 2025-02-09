import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';
import { exchangeCurrency, latestRates } from '../../service/exchangeAPI';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coord, { rejectWithValue, getState }) => {
    const state = getState();
    const { baseCurrency } = state.currency;

    if (baseCurrency) {
      return rejectWithValue('We already have base currency!');
    }
    try {
      const response = await getUserInfo(coord);

      return response.results[0].annotations.currency.iso_code;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchExchangeCurrency = createAsyncThunk(
  'currency/fetchExch',
  async (credencials, { rejectWithValue }) => {
    try {
      const data = await exchangeCurrency(credencials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchRates = createAsyncThunk(
  'currency/fetchRates',
  async (currency, { rejectWithValue }) => {
    try {
      const data = await latestRates(currency);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
