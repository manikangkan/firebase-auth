const firebaseConfig = {
  apiKey: "AIzaSyC7KwG87mpp7g80wOtpbdKFhShXt0lyHBY",
  authDomain: "learningfirebase-704c7.firebaseapp.com",
  projectId: "learningfirebase-704c7",
  storageBucket: "learningfirebase-704c7.appspot.com",
  messagingSenderId: "278262901424",
  appId: "1:278262901424:web:b5cd4ff5b5e1a5e50ae975",
  measurementId: "G-951MYKEQ6Q",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const ff = firebase.firestore();
const auth = firebase.auth();
const db = ff.collection("users");
