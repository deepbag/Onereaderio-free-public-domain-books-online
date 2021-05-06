import firebase from 'firebase';
import 'firebase/auth';
// import 'firebase/storage';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBM_0Sbl5VDK2Grb4mB8dlPQOQOm-XHk3M",
    authDomain: "onereaderio-aa29b.firebaseapp.com",
    projectId: "onereaderio-aa29b",
    storageBucket: "onereaderio-aa29b.appspot.com",
    messagingSenderId: "356568747920",
    appId: "1:356568747920:web:a2c2ce066afce88c6fad15",
    measurementId: "G-06YK8RVKDK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();
export { auth };
// export { storage };
export default db;
