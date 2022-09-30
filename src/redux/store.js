import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import info from './slices/infoSlice';
import cart from './slices/cartSlice';
import user from './slices/userSlice';
export const store = configureStore({
  reducer: {
    filter,
    info,
    cart,
    user,
  },
});
