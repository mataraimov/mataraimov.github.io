import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {},
};

export const infoSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { setItem } = infoSlice.actions;

export default infoSlice.reducer;
