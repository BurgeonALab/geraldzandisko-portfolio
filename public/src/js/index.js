import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
    apiKey: "AIzaSyCU5SmyCTAmXUAUVeSCf0fVnA2OxlXHU-U",
    authDomain: "gerraour-bee69.firebaseapp.com",
    databaseURL: "https://gerraour-bee69-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gerraour-bee69",
    storageBucket: "gerraour-bee69.appspot.com",
    messagingSenderId: "923996121424",
    appId: "1:923996121424:web:1bc2f96ba78ec9a7062455",
    measurementId: "G-XDPT9XMJXM"
  };
const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LdXM_QkAAAAAOacKvXRl721QlDApYHOstWXKjFV'),
  
  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});
const storage = getStorage(app);
