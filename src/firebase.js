import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAs3KuJN-otyM7SzjxKB6XnlLI7tzZ1-Qs",
  authDomain: "madondo-80471.firebaseapp.com",
  databaseURL: "https://madondo-80471.firebaseio.com",
  projectId: "madondo-80471",
  storageBucket: "madondo-80471.appspot.com",
  messagingSenderId: "1015169836252"
};
firebase.initializeApp(config);

export default firebase;
