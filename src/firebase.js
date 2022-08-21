import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC2jAvH-_XCUXef4hZM86rYb0OtXhxEmZo",
    authDomain: "challeng-c1a55.firebaseapp.com",
    databaseURL: "https://challeng-c1a55.firebaseio.com",
    projectId: "challeng-c1a55",
    storageBucket: "challeng-c1a55.appspot.com",
    messagingSenderId: "314871330109",
    appId: "1:314871330109:web:dbfd250ead201dcb38c154",
    measurementId: "G-B94WPHSJ9F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };