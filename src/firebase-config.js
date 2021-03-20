import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDCM1ZutYkOG5kqSvyiEt4cTSJHOfnDkyk",
    authDomain: "todoapp-cdf97.firebaseapp.com",
    projectId: "todoapp-cdf97",
    storageBucket: "todoapp-cdf97.appspot.com",
    messagingSenderId: "1022665977797",
    appId: "1:1022665977797:web:b514ce0d526e18e430a5ac"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()

   export { db }