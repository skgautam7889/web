
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyBRnU-ukg1hajloAXYxmU_2wiKnwbNKDhA",
//   authDomain: "react-firebase-auth-6270e.firebaseapp.com",
//   databaseURL: "https://react-firebase-auth-6270e.firebaseio.com",
//   projectId: "react-firebase-auth-6270e",
//   storageBucket: "react-firebase-auth-6270e.appspot.com",
//   messagingSenderId: "83091629514",
//   appId: "1:83091629514:web:99702034755a934a5a9b33",
// });

const firebaseConfig = {
  apiKey: "AIzaSyADS6YbPm9ZZLjR8_GDjnqeqAZ5cX9BNv8",
  authDomain: "todo-app-firebase-4c746.firebaseapp.com",
  databaseURL: "https://todo-app-firebase-4c746-default-rtdb.firebaseio.com",
  projectId: "todo-app-firebase-4c746",
  storageBucket: "todo-app-firebase-4c746.appspot.com",
  messagingSenderId: "422666400355",
  appId: "1:422666400355:web:e35908f5faaeb9861cfe56",
  measurementId: "G-87SQKQZHQS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;