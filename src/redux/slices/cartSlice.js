import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    additem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusitem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count >= 1) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      // state.items.filter((obj) => obj.id !== action.payload);
    },
    removeitem: (state, action) => {
      // state.items.filter((obj) => obj.id !== action.payload);
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearitem: (state) => {
      state.items = [];
    },
  },
});

export const { additem, removeitem, minusitem, clearitem } = cartSlice.actions;

export default cartSlice.reducer;
