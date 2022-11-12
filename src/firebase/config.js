import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBlPTMJu4w45k50mKk2OLlr1SHNmiOAOi0",
    authDomain: "live-chat-3a634.firebaseapp.com",
    projectId: "live-chat-3a634",
    storageBucket: "live-chat-3a634.appspot.com",
    messagingSenderId: "785433362925",
    appId: "1:785433362925:web:0731d546f73e5504ef27e4"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp, projectAuth }