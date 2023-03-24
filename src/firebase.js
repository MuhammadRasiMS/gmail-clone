import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyALwGxs1I9Rk0Yr-buxO9pd5-IE_KyJFAw",
  authDomain: "clone-d811b.firebaseapp.com",
  projectId: "clone-d811b",
  storageBucket: "clone-d811b.appspot.com",
  messagingSenderId: "471214372939",
  appId: "1:471214372939:web:98308546c207118793b5ce",
  measurementId: "G-1M3QYR662R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };  