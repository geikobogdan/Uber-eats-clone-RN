import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGrLCtJWu7KGRdBWme8K9XeXzwMOMYQCQ",
  authDomain: "uber-eats-clone-rn-6f37c.firebaseapp.com",
  projectId: "uber-eats-clone-rn-6f37c",
  storageBucket: "uber-eats-clone-rn-6f37c.appspot.com",
  messagingSenderId: "809887999879",
  appId: "1:809887999879:web:ad100ecaed3773d9469522",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase  ;
