import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBPML9hPJ8xTpxIfpt-SD-PjEScAZ90JCo",
  authDomain: "crownclothing-8c6ad.firebaseapp.com",
  projectId: "crownclothing-8c6ad",
  storageBucket: "crownclothing-8c6ad.appspot.com",
  messagingSenderId: "321500967125",
  appId: "1:321500967125:web:dca2336ec14545c8f7325c",
  measurementId: "G-Y1K7BKFDS6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

//to use google, fb etc Authentication service provider from firebase
const provider = new GoogleAuthProvider();

// account selector
provider.setCustomParameters({
  prompt: "select_account",
});

//authentication service usage
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

//getting firestore to make a database
export const db = getFirestore();

//creating a doc with 3 params
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  const userDocRef = doc(db, "user", userAuth.uid);

  //getting the doc
  const userSnapshot = await getDoc(userDocRef);

  // if user data doesnot exists
  // create / SET the documnet with the data from userAuth to my collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("User Making Error ", error.message);
    }
  }

  // if user data exists
  // return userDocRef;

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
} 


