import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDQGUMrKFL_bkZdVl70wRuzZltsKArJlHc",
    authDomain: "expensify-67e88.firebaseapp.com",
    databaseURL: "https://expensify-67e88.firebaseio.com",
    projectId: "expensify-67e88",
    storageBucket: "expensify-67e88.appspot.com",
    messagingSenderId: "854513582646",
    appId: "1:854513582646:web:2ad5942ccf65fe6ae84e97",
    measurementId: "G-39KCWMJX02"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };