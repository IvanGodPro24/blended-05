import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const slice = createSlice({
  name: 'currency',

  initialState: {
    baseCurrency: '',
    loading: false,
    error: null,
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
      }),
});

export const currencyReducer = slice.reducer;
