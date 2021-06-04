import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPIOtbBV0GqshbURwcuJZE1Cfk_9SfrpE",
  authDomain: "project-planner-64f0f.firebaseapp.com",
  projectId: "project-planner-64f0f",
  storageBucket: "project-planner-64f0f.appspot.com",
  messagingSenderId: "622804767229",
  appId: "1:622804767229:web:6b57f5a38d41128a54c994"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp }