import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAgntieklHmtkb4ZVJS-v6EfLvHFPer4Pk",
  authDomain: "tfblog-2e8af.firebaseapp.com",
  projectId: "tfblog-2e8af",
  storageBucket: "tfblog-2e8af.appspot.com",
  messagingSenderId: "790344530140",
  appId: "1:790344530140:web:e207ab02b94e9e5e139c19",
  measurementId: "G-NYCXPX3GQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app)

export {db,auth,storage}