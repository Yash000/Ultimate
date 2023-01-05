import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDklLuYsHi7pkn1LJJqWSq6UVLV9yBiBgE",
    authDomain: "ultimate-react-20e74.firebaseapp.com",
    databaseURL: "https://ultimate-react-20e74-default-rtdb.firebaseio.com",
    projectId: "ultimate-react-20e74",
    storageBucket: "ultimate-react-20e74.appspot.com",
    messagingSenderId: "938334867456",
    appId: "1:938334867456:web:ee34b3249c7678057848e5",
    measurementId: "G-EJLC59YY11"
};
firebase.initializeApp(firebaseConfig);
const dataRef = firebase.database().ref('data');

export default function Home() {
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

    return (
        <div>
            <input type="text"/>
            <h1 onClick={setv(5)}>this is homepage</h1>
            <h1 onClick={click}>{show}</h1>
        </div>
    )
}