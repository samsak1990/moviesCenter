import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: '',
  generId: '',
  order: 'NUM_VOTE',
  type: '',
  year: '',
  page: 1,
};

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState,
  reducers: {},
});

export const {} = currentQuerySlice.actions;

export default currentQuerySlice.reducer;
