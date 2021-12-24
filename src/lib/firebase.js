import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyAT1OoHM7jtDwYc8uMFi8UIzGrkLVJeSLE",
    authDomain: "instagram-clone-98e54.firebaseapp.com",
    projectId: "instagram-clone-98e54",
    storageBucket: "instagram-clone-98e54.appspot.com",
    messagingSenderId: "913220612163",
    appId: "1:913220612163:web:9d7a0cfb6b8d662cd5a4f6"
};

const fireBase = firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;


export { fireBase, FieldValue };
