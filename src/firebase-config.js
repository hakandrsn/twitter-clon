import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBttydj1fXtLBSw_sDzDQ-hiFgGhbOXUDs",
  authDomain: "twitter-clon-c8505.firebaseapp.com",
  projectId: "twitter-clon-c8505",
  storageBucket: "twitter-clon-c8505.appspot.com",
  messagingSenderId: "59002959148",
  appId: "1:59002959148:web:f75aa7e78d7c1a02192889",
  measurementId: "G-Z6731WC1TG"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)