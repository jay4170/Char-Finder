import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
//TODO:hide values somehow

const firebaseConfig = {
  apiKey: "AIzaSyDKieZL9TN762zVOKOc6S8gS9viXwZWuaA",
  authDomain: "character-finder.firebaseapp.com",
  projectId: "character-finder",
  storageBucket: "character-finder.appspot.com",
  messagingSenderId: "667429906362",
  appId: "1:667429906362:web:b0727aec536207cbcddf83",
  measurementId: "G-BX03TXHPLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
