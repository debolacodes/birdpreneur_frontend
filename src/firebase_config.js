
import * as firebase from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBdWLZUjKsK4QdX8Bg50FhuZHgxOg4V_Hk",
  authDomain: "birdpreneurapp.firebaseapp.com",
  projectId: "birdpreneurapp",
  storageBucket: "birdpreneurapp.appspot.com",
  messagingSenderId: "886534951880",
  appId: "1:886534951880:web:b2410a147f70d5396426fd",
  measurementId: "G-MHD08NCN8M"
};

export const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore()

// FirebaseError, SDK_VERSION, _DEFAULT_ENTRY_NAME, _addComponent, _addOrOverwriteComponent, _apps, _clearComponents, _components, _getProvider, _registerComponent, _removeServiceInstance, deleteApp, getApp, getApps, initializeApp, onLog, registerVersion, setLogLevel