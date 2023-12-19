import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "wihara-buddha-warman.firebaseapp.com",
  projectId: "wihara-buddha-warman",
  storageBucket: "wihara-buddha-warman.appspot.com",
  messagingSenderId: "834920278697",
  appId: "1:834920278697:web:2b2b636b93ced97a5ed7b8",
  measurementId: "G-8SPRSFRQPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);