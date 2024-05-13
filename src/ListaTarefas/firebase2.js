import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig2 = {
  apiKey: "AIzaSyBAz_vd4ukLEeDXqpr2Hx4UtBXcGL1QZM4",
  authDomain: "novoaplicacao-6d78d.firebaseapp.com",
  projectId: "novoaplicacao-6d78d",
  storageBucket: "novoaplicacao-6d78d.appspot.com",
  messagingSenderId: "479421619986",
  appId: "1:479421619986:web:3b273bbd70d9791f051dcb"
};

const app2 = initializeApp(firebaseConfig2, 'firebase2');
const firestore2 = getFirestore(app2);

export { firestore2 };
