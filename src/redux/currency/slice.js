import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchRates,
} from './operations';

const handlePending = state => {
  state.error = null;
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'currency',

  initialState: {
    baseCurrency: '',
    rates: [],
    exchangeInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.baseCurrency = action.payload;
      })

      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.exchangeInfo = action.payload;
      })

      .addCase(fetchRates.fulfilled, (state, action) => {
        state.loading = false;
        state.rates = action.payload;
      })

      .addMatcher(action => {
        return action.type.endsWith('rejected');
      }, handleRejected)

      .addMatcher(action => {
        return action.type.endsWith('pending');
      }, handlePending),
});

// .addMatcher(
// isAnyOf(
// fetchBaseCurrency.rejected, fetchExchangeCurrency.rejected),
// (state, action) => {
// функція, що Ви створили для зміни станів loader та error
// })

export const currencyReducer = slice.reducer;
export const { setBaseCurrency } = slice.actions;
