// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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