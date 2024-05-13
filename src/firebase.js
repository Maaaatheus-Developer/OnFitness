import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyALB84cJl9VMawdeRa1olDLMNRwj2E1x7c",
  authDomain: "novo-teste-e110d.firebaseapp.com",
  projectId: "novo-teste-e110d",
  storageBucket: "novo-teste-e110d.appspot.com",
  messagingSenderId: "729088419268",
  appId: "1:729088419268:web:d38757db343bf418faf091"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();
const auth = app.auth();

export { auth, db, storage };