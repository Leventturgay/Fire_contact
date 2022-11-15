import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdbvQ7OIFBCFKYeu7axAxbWB_yZM1xESA",
  authDomain: "fire-contact-project-d555f.firebaseapp.com",
  databaseURL: "https://fire-contact-project-d555f-default-rtdb.firebaseio.com",
  projectId: "fire-contact-project-d555f",
  storageBucket: "fire-contact-project-d555f.appspot.com",
  messagingSenderId: "154146935906",
  appId: "1:154146935906:web:0f226ed1360f4eb0bbed3b",
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
