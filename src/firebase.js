import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDV100iltksPglgyaciWi1RaqY30Ycqbpk",
  authDomain: "clone-80291.firebaseapp.com",
  projectId: "clone-80291",
  storageBucket: "clone-80291.appspot.com",
  messagingSenderId: "424401611414",
  appId: "1:424401611414:web:3c5b091cab40ba671f30b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
