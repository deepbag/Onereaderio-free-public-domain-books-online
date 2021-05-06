import firebase from 'firebase';
import 'firebase/auth';
// import 'firebase/storage';

const firebaseApp = firebase.initializeApp({
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    measurementId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();
export { auth };
// export { storage };
export default db;
