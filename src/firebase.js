import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCdY2iufGR_FfaH__Vj1AVnsJUEmTin_lE',
  authDomain: 'react-discord-clone-81f1e.firebaseapp.com',
  databaseURL: 'https://react-discord-clone-81f1e.firebaseio.com',
  projectId: 'react-discord-clone-81f1e',
  storageBucket: 'react-discord-clone-81f1e.appspot.com',
  messagingSenderId: '767296680298',
  appId: '1:767296680298:web:0cf9ad60bba77f6f02b513',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
