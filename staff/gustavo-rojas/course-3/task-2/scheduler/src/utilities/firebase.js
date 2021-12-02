import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDzVKdflz2JigP0AWmWAKX-VM4OlmyXxAc",
  authDomain: "scheduler-637fd.firebaseapp.com",
  databaseURL: "https://scheduler-637fd-default-rtdb.firebaseio.com",
  projectId: "scheduler-637fd",
  storageBucket: "scheduler-637fd.appspot.com",
  messagingSenderId: "7304756838",
  appId: "1:7304756838:web:b5144b00ed4b3e493af7a7",
  measurementId: "G-BSXHPFCRQD"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

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
