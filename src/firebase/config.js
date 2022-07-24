import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore' 
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJYwIA3rHrgjGZN8vrnfbG-2RpN6TNhF0",
  authDomain: "olx-clone-c904a.firebaseapp.com",
  projectId: "olx-clone-c904a",
  storageBucket: "olx-clone-c904a.appspot.com",
  messagingSenderId: "484249537885",
  appId: "1:484249537885:web:75e4c214bc02490ddcecb4",
  measurementId: "G-FEH94VJ6EF"
};
export default firebase.initializeApp(firebaseConfig);
