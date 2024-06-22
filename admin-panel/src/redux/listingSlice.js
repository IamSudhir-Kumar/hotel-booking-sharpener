import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getListings, removeListing, addListing } from '../firebase/firebase';

export const fetchListings = createAsyncThunk('listings/fetchListings', async () => {
  const response = await getListings();
  return response;
});

export const deleteListing = createAsyncThunk('listings/deleteListing', async (id) => {
  await removeListing(id);
  return id;
});

export const createListing = createAsyncThunk('listings/createListing', async (listing) => {
  await addListing(listing);
});

const listingSlice = createSlice({
  name: 'listings',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteListing.fulfilled, (state, action) => {
        state.items = state.items.filter((listing) => listing.id !== action.payload);
      })
      .addCase(createListing.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default listingSlice.reducer;
