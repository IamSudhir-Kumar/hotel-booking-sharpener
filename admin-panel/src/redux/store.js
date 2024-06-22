import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import categoryReducer from './categorySlice';
import listingReducer from './listingSlice';
import bookingReducer from './bookingSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    categories: categoryReducer,
    listings: listingReducer,
    bookings: bookingReducer,
  },
});
