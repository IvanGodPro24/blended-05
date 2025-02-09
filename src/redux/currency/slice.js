import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchangeCurrency } from './operations';

const slice = createSlice({
  name: 'currency',

  initialState: {
    baseCurrency: '',
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
      .addCase(fetchBaseCurrency.pending, state => {
        state.loading = true;
      })
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.baseCurrency = action.payload;
      })
      .addCase(fetchBaseCurrency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.exchangeInfo = action.payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const currencyReducer = slice.reducer;
export const { setBaseCurrency } = slice.actions;
