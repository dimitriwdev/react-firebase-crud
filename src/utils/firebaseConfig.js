import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDLVCARdXykU1SMAvUvwQLT2lWdZZwxlcI",
  authDomain: "react-crud-49d1d.firebaseapp.com",

  databaseURL: "https://react-crud-49d1d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-crud-49d1d",
  storageBucket: "react-crud-49d1d.appspot.com",
  messagingSenderId: "633431974873",
  appId: "1:633431974873:web:9b51b53b80a1250e6defc8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;