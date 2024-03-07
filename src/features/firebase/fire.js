import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2xXdSJqAX_UfqltmMMJKrCw-8qFM84nE",
    authDomain: "react-app-d03cc.firebaseapp.com",
    projectId: "react-app-d03cc",
    storageBucket: "react-app-d03cc.appspot.com",
    messagingSenderId: "993857190090",
    appId: "1:993857190090:web:2d643d04ddb2a5d0681c33",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
