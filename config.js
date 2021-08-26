import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAEQP9jyjRU2EsZ8D0TxMhqkm6npwaphLE",
  authDomain: "attendance-project-c60.firebaseapp.com",
  databaseURL: "https://attendance-project-c60-default-rtdb.firebaseio.com",
  projectId: "attendance-project-c60",
  storageBucket: "attendance-project-c60.appspot.com",
  messagingSenderId: "811132587253",
  appId: "1:811132587253:web:0ad14448f473a0526b89bc"
};
//initialize your database
firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  