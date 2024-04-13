import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage} from 'firebase/storage';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJKsTHshB4_eI1JTfpJ7SGl-EEr87aYlc",
  authDomain: "scrapeco-fd9aa.firebaseapp.com",
  projectId: "scrapeco-fd9aa",
  storageBucket: "scrapeco-fd9aa.appspot.com",
  messagingSenderId: "447824340091",
  appId: "1:447824340091:web:b7985e13edda008dba6ede",
  measurementId: "G-ND2K0WH0H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export default app;
//const analytics = getAnalytics(app);