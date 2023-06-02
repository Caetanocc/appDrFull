const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "etec22s2",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1",
    measurementId: "G-LZS9HLK6PQ"
    };
  
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
    // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const pessoaRef = dbRef.child('pessoas');
  
