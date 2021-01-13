import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDBP4bjaAhF6KYLEQMp3FTtDUsPPvhhJvA",
  authDomain: "crown-db-37cd7.firebaseapp.com",
  databaseURL: "https://crown-db-37cd7-default-rtdb.firebaseio.com",
  projectId: "crown-db-37cd7",
  storageBucket: "crown-db-37cd7.appspot.com",
  messagingSenderId: "668070440988",
  appId: "1:668070440988:web:5fe29365340f60a911efd9",
  measurementId: "G-3XGJ0EYZL1"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
