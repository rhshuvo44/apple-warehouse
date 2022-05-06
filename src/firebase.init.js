import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.REACT_APP_apiKey,
  // authDomain: process.env.local.REACT_APP_authDomain,
  // projectId: process.env.local.REACT_APP_projectId,
  // storageBucket: process.env.local.REACT_APP_storageBucket,
  // messagingSenderId: process.env.local.REACT_APP_messagingSenderId,
  // appId: process.env.local.REACT_APP_appId,
apiKey: "AIzaSyC6Hp867LDR4ppjNsfeXo0g6aRNmVOxOqc",
authDomain: "iphone-warehouse.firebaseapp.com",
projectId: "iphone-warehouse",
storageBucket: "iphone-warehouse.appspot.com",
messagingSenderId: "1054568090408",
appId: "1:1054568090408:web:88a7441b224da9a4839e1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
