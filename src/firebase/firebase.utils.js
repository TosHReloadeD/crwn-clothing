import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDs4mzxlBN9m0L4qcLcj6S905TRYOgffWQ',
  authDomain: 'crwn-db-39b2e.firebaseapp.com',
  databaseURL: 'https://crwn-db-39b2e.firebaseio.com',
  projectId: 'crwn-db-39b2e',
  storageBucket: 'crwn-db-39b2e.appspot.com',
  messagingSenderId: '1033575842127',
  appId: '1:1033575842127:web:a993cf0ef5a1589e7f453a',
  measurementId: 'G-MXJRY7XLDE'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;