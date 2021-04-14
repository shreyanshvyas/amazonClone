import firebase from "firebase";
firebase.initializeApp({
  // Add your Configuration Code here.
});
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
