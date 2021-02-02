
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKIodIbot4_Ei-i2r7ZMGjvvhMjf2UUZw",
  authDomain: "signal-clone-y.firebaseapp.com",
  projectId: "signal-clone-y",
  storageBucket: "signal-clone-y.appspot.com",
  messagingSenderId: "536098978670",
  appId: "1:536098978670:web:35f6216e36bca5dd255f7f"
};

let app;

if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
} else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();


export {db, auth};



