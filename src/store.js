import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import wishlistReducer from './features/wishlistSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer
  }
});
