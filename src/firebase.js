
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey: "AIzaSyAOpcNEDsn6iTngMi6WKLdvkvEzXNP1nSo",
  authDomain: "tesla-clone-6b43b.firebaseapp.com",
  projectId: "tesla-clone-6b43b",
  storageBucket: "tesla-clone-6b43b.appspot.com",
  messagingSenderId: "1023582236590",
  appId: "1:1023582236590:web:57a8a53ea00c5f4aeca23f",
  measurementId: "G-5XQY8JBVG8"
})


const auth = firebase.auth()

export { auth }
