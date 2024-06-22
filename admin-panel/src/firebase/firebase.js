import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, deleteDoc, updateDoc, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBfRfLSVLn86wNBt9Go5gmnxm9NQzcPWq8",
  authDomain: "assignment-14ae6.firebaseapp.com",
  databaseURL: "https://assignment-14ae6-default-rtdb.firebaseio.com",
  projectId: "assignment-14ae6",
  storageBucket: "assignment-14ae6.appspot.com",
  messagingSenderId: "453529565392",
  appId: "1:453529565392:web:3d867a26bcc6bcfa5a46d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

export const getListings = async () => {
  const listingsSnapshot = await getDocs(collection(db, 'listings'));
  const listings = [];
  listingsSnapshot.forEach((doc) => {
    listings.push({ id: doc.id, ...doc.data() });
  });
  return listings;
};

export const removeListing = async (id) => {
  await deleteDoc(doc(db, 'listings', id));
};

export const getBookings = async () => {
  const bookingsSnapshot = await getDocs(collection(db, 'bookings'));
  const bookings = [];
  bookingsSnapshot.forEach((doc) => {
    bookings.push({ id: doc.id, ...doc.data() });
  });
  return bookings;
};

export const updateBookingStatus = async (id, status) => {
  const bookingRef = doc(db, 'bookings', id);
  await updateDoc(bookingRef, { status });
};

export const addListing = async (listing) => {
  await addDoc(collection(db, 'listings'), listing);
};
