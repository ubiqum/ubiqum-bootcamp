// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);