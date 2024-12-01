// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ2HGaih-ul55zjzmIntVGRjVJ7ubnUG8",
  authDomain: "lipa-s.firebaseapp.com",
  projectId: "lipa-s",
  storageBucket: "lipa-s.appspot.com",
  messagingSenderId: "1004400319686",
  appId: "1:1004400319686:web:743b43626c5f9c6a850bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export { app };
