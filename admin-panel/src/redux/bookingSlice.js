import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBookings, updateBookingStatus } from '../firebase/firebase';

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async () => {
  const response = await getBookings();
  return response;
});

export const approveBooking = createAsyncThunk('bookings/approveBooking', async (id) => {
  await updateBookingStatus(id, 'approved');
  return id;
});

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(approveBooking.fulfilled, (state, action) => {
        const booking = state.items.find((booking) => booking.id === action.payload);
        if (booking) {
          booking.status = 'approved';
        }
      });
  },
});

export default bookingSlice.reducer;
