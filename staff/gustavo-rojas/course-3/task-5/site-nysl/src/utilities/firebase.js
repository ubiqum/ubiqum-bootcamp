import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';
// const analytics = getAnalytics(app);
export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };

const firebaseSignOut = () => signOut(getAuth(firebase));


export const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(firebase), setUser);
  }, []);

  return [user];
};

const firebaseConfig = {
  apiKey: "AIzaSyDKIrUzXk5468PKOAl05fRDub2ynJiTDWM",
  authDomain: "site-nysl.firebaseapp.com",
  databaseURL: "https://site-nysl-default-rtdb.firebaseio.com",
  projectId: "site-nysl",
  storageBucket: "site-nysl.appspot.com",
  messagingSenderId: "17474263660",
  appId: "1:17474263660:web:1172327d61ab57eef69649",
  measurementId: "G-ES77RVXY38"
};

const firebase = initializeApp(firebaseConfig);

export const SignOuButton = () => (
    <button className="btn btn-secondary btn-sm"
        onClick={() => firebaseSignOut()}>
      Sign Out
    </button>
  );

  export const SignInButton = () => (
    <button className="btn btn-secondary btn-sm"
        onClick={() => signInWithGoogle()}>
      Sign In
    </button>
  );

  

  const database = getDatabase(firebase);
  export const setData = (path, value) => (
    set(ref(database, path), value)
  );
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





 
 
 

  

  
