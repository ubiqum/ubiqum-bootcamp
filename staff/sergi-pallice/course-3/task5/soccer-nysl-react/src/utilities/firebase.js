import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { useState, useEffect } from 'react'
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCaHt6iD_3wksoERgujn6SnuLY0ZTzshxc",
  authDomain: "soccer-react-app-7f65c.firebaseapp.com",
  projectId: "soccer-react-app-7f65c",
  storageBucket: "soccer-react-app-7f65c.appspot.com",
  messagingSenderId: "660788612491",
  appId: "1:660788612491:web:33475997a32a96ce54738e",
  measurementId: "G-88FS1G5KQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Google Sign in / out
export const signIn = () => {signInWithPopup(getAuth(app), new GoogleAuthProvider())};
export const firebaseSignOut = () => signOut(getAuth(app));
export { firebaseSignOut as signOut };
export const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(app), setUser);
  }, []);

  return [user];
};

// Fetch data
export const setData = (path, value) => (
  set(ref(database, path), value)
);


export const useData = (path) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    // const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    // if (devMode) { console.log(`loading ${path}`); }
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        console.log(val, path)
        // if (devMode) { console.log(val); }
        setLoading(false);
        setError(null);
        }, (error) => {
          setData(null);
          setLoading(false);
          setError(error);
    });
  }, [path]);

  return [data, loading, error];
};

