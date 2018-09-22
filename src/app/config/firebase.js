import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig={
    apiKey: "AIzaSyBEoxbU7eoNb5ShfeOt6uCo_rlusqKIJGo",
    authDomain: "modular-seeker-215717.firebaseapp.com",
    databaseURL: "https://modular-seeker-215717.firebaseio.com",
    projectId: "modular-seeker-215717",
    storageBucket: "modular-seeker-215717.appspot.com",
    messagingSenderId: "745343757670"
}


firebase.initializeApp(firebaseConfig)
firebase.firestore();

export default firebase 