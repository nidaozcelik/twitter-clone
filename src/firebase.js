import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCZNzCu-9Jp0IUdcriphC03qfgsLOeLlos",
  authDomain: "twitter-clone-6d77f.firebaseapp.com",
  projectId: "twitter-clone-6d77f",
  storageBucket: "twitter-clone-6d77f.appspot.com",
  messagingSenderId: "962856877687",
  appId: "1:962856877687:web:a1cb21fa477f3ff7f0d072",
  measurementId: "G-YDFSKD1V6M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
export default db;