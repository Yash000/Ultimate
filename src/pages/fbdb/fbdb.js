import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: "ultimate-react-20e74.appspot.com",
    messagingSenderId: "938334867456",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-EJLC59YY11"
};
firebase.initializeApp(firebaseConfig);
const dataRef = firebase.database().ref('data');

export default function FBDB() {
    let [show, setshow] = React.useState("__");
    let x;

    function setv(n) {

        dataRef.set({
            name: 'John',
            age: n
        });
    }
    function click() {

        dataRef.on('value', snapshot => {
            x = snapshot.val();
            console.log(x);
        });
        setshow(x.age)
    }
    return(
        <div>
        <h1 onClick={()=>setv(65)}>Click me 65</h1>
        <h1 onClick={()=>setv(64)}>Click me 64</h1>
        <h1 onClick={click}>{show}</h1>
        </div>
    )
}