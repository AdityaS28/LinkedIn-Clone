import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5DdVJcmtxvSIGuGdGq4pdepRoJ23oRqk",
  authDomain: "linkedin-clone-605b2.firebaseapp.com",
  projectId: "linkedin-clone-605b2",
  storageBucket: "linkedin-clone-605b2.appspot.com",
  messagingSenderId: "366211548461",
  appId: "1:366211548461:web:9eeead61192972597c7fa4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };