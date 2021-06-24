import firebase from "firebase/";
const firebaseConfig = {
  apiKey: "AIzaSyA8HMT5OsiDZdRd7eRPZvUugk4OqlTHqIA",
  authDomain: "ints-c.firebaseapp.com",
  databaseURL: "https://ints-c.firebaseio.com",
  projectId: "ints-c",
  storageBucket: "ints-c.appspot.com",
  messagingSenderId: "369870237959",
  appId: "1:369870237959:web:b4794ab8ca7da2e17555a2",
  measurementId: "G-9NXFR6PZXT"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
