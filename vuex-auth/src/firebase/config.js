import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD7pDdWgPdFreF48WrhaKpfvFCHqO_kum0",
    authDomain: "vuex-auth-74c8b.firebaseapp.com",
    projectId: "vuex-auth-74c8b",
    storageBucket: "vuex-auth-74c8b.appspot.com",
    messagingSenderId: "731101381627",
    appId: "1:731101381627:web:6682132b4223543bb7c15e"
  };

  initializeApp(firebaseConfig)

  const auth = getAuth()

  export { auth }