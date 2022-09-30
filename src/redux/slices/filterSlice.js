import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: {
    name: 'alphabet',
    sortProperty: 'name',
  },
  gender: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setcategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setsort: (state, action) => {
      state.sort = action.payload;
    },
    setgender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { setcategoryId, setsort, setgender } = filterSlice.actions;

export default filterSlice.reducer;
