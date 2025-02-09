import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',

  initialState: '',

  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

export const filterReducer = slice.reducer;

export const { changeFilter } = slice.actions;
