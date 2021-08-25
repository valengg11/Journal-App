import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOmfVFUHS5bGuL-NmHAaTKYBTfU94_00A",
  authDomain: "react-journal-app-e4f66.firebaseapp.com",
  projectId: "react-journal-app-e4f66",
  storageBucket: "react-journal-app-e4f66.appspot.com",
  messagingSenderId: "270562688111",
  appId: "1:270562688111:web:88fd764485d010831c619a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { 
    db, 
    googleAuthProvider, 
    firebase 
};
