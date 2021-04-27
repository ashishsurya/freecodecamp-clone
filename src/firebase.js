import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAMwQFbRALFKqCabJYe-iCKmhUbSXv3etc',
  authDomain: 'freecodecamp-clone.firebaseapp.com',
  projectId: 'freecodecamp-clone',
  storageBucket: 'freecodecamp-clone.appspot.com',
  messagingSenderId: '1033419710314',
  appId: '1:1033419710314:web:24de7308c1e20c75128f13',
  measurementId: 'G-RNC0VRRD9K',
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();

export { db, auth };
