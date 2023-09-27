import { initializeApp } from "firebase/app";

const app = initializeApp({

  apiKey: "AIzaSyDbgCtlQlwW6f3EbBdhyN4VlncQfwws8N0",

  authDomain: "quiz-app-b58a1.firebaseapp.com",

  projectId: "quiz-app-b58a1",

  storageBucket: "quiz-app-b58a1.appspot.com",

  messagingSenderId: "1064393317652",

  appId: "1:1064393317652:web:907bf4c4d00702bc817601",

  databaseURL: "https://quiz-app-b58a1-default-rtdb.asia-southeast1.firebasedatabase.app",


  // apiKey: import.meta.env.QUIZ_APP_API_KEY,

  // authDomain: import.meta.env.QUIZ_APP_AUTH_DOMAIN,

  // projectId: import.meta.env.QUIZ_APP_PROJECT_ID,

  // storageBucket: import.meta.env.QUIZ_APP_STORAGE_BUCKET,

  // messagingSenderId: import.meta.env.QUIZ_APP_MESSAGING_SENDER_ID,

  // appId: import.meta.env.QUIZ_APP_APP_ID,

});

export default app;