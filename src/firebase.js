import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCkCC8sgM3N9HV81ME8f08WaEO3bISnSuQ",
    authDomain: "clone-73fac.firebaseapp.com",
    projectId: "clone-73fac",
    storageBucket: "clone-73fac.appspot.com",
    messagingSenderId: "811430489220",
    appId: "1:811430489220:web:d16c98f5c8e2908f51a6d1",
    measurementId: "G-HWTQ12WFKE"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};