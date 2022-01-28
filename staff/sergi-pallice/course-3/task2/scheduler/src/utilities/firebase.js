// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { useState, useEffect } from 'react'
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(app), new GoogleAuthProvider());
};


const firebaseSignOut = () => signOut(getAuth(app));

export { firebaseSignOut as signOut };


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmyFsubnUgIxjRAH5OMvaIShanRh8gcQk",
  authDomain: "ubiqum-react-scheduler.firebaseapp.com",
  databaseURL: "https://ubiqum-react-scheduler-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ubiqum-react-scheduler",
  storageBucket: "ubiqum-react-scheduler.appspot.com",
  messagingSenderId: "431939177377",
  appId: "1:431939177377:web:ea2cddc8d3f137d686d9e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const setData = (path, value) => (
  set(ref(database, path), value)
);

export const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(app), setUser);
  }, []);

  return [user];
};

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    if (devMode) { console.log(`loading ${path}`); }
    return onValue(dbRef, (snapshot) => {
      const val = snapshot.val();
      if (devMode) { console.log(val); }
      setData(transform ? transform(val) : val);
      setLoading(false);
      setError(null);
    }, (error) => {
      setData(null);
      setLoading(false);
      setError(error);
    });
  }, [path, transform]);

  return [data, loading, error];
};