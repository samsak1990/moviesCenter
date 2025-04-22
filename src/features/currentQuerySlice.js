import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: '',
  generId: '',
  order: '',
  type: '',
  year: '',
  page: 1,
};

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState,
  reducers: {
    selectQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetQuery:: () => ({
      ...initialState,
    }),
  },
});

export const { selectQuery, resetQuery } = currentQuerySlice.actions;

export default currentQuerySlice.reducer;
