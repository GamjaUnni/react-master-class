// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_API_KEY,
    authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: import.meta.env.REACT_APP_DATABASE_URL,
    projectId: import.meta.env.REACT_APP_PROJECT_ID,
    storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.REACT_APP_MESSAGIN_ID,
    appId: import.meta.env.REACT_APP_APP_ID,
};

// Initialize Firebase
// export default firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export default app;
