import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coord, { rejectWithValue }) => {
    try {
      const response = await getUserInfo(coord);

      return response.results[0].annotations.currency.iso_code;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
