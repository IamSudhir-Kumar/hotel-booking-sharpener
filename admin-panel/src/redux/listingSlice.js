import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db, storage } from '../firebase/firebase';
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async () => {
    const querySnapshot = await getDocs(collection(db, 'listings'));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
);

export const addListing = createAsyncThunk(
  'listings/addListing',
  async (newListing) => {
    const imagesURLs = await Promise.all(
      newListing.images.map(async (image) => {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        return await getDownloadURL(storageRef);
      })
    );
    const listingWithImages = { ...newListing, images: imagesURLs };
    const docRef = await addDoc(collection(db, 'listings'), listingWithImages);
    return { id: docRef.id, ...listingWithImages };
  }
);

const listingSlice = createSlice({
  name: 'listings',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addListing.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default listingSlice.reducer;
