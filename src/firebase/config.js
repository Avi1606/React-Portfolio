// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARXQN-Y3vJlU02cAKd5Ft9j8ibRtIhO3c",
  authDomain: "my-portfolio-a2911.firebaseapp.com",
  databaseURL: "https://my-portfolio-a2911-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portfolio-a2911",
  storageBucket: "my-portfolio-a2911.firebasestorage.app",
  messagingSenderId: "1096502584316",
  appId: "1:1096502584316:web:cd8651f45be30e0f250879",
  measurementId: "G-W2WEEWSETQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

export default app;