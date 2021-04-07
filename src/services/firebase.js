import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDiqVISc6jm0Xzkhbn-PkE6nVFqVDBzJLg",
  authDomain: "budget-tracker-4ec2c.firebaseapp.com",
  projectId: "budget-tracker-4ec2c",
  storageBucket: "budget-tracker-4ec2c.appspot.com",
  messagingSenderId: "579094512167",
  appId: "1:579094512167:web:a9d5250dc7bd7bfa120402",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
