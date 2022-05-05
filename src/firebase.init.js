import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.REACT_APP_apiKey,
  authDomain: process.env.local.REACT_APP_authDomain,
  projectId: process.env.local.REACT_APP_projectId,
  storageBucket: process.env.local.REACT_APP_storageBucket,
  messagingSenderId: process.env.local.REACT_APP_messagingSenderId,
  appId: process.env.local.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
