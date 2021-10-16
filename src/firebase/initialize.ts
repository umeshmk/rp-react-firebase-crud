import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBFTPWf_0SUe8gT_6GdVYoR1RhHiFIxGjg",
  authDomain: "rp-react-query-crud.firebaseapp.com",
  projectId: "rp-react-query-crud",
  storageBucket: "rp-react-query-crud.appspot.com",
  messagingSenderId: "349548232442",
  appId: "1:349548232442:web:697448d56fceb8916a9343",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
