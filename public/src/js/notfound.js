// CSSs, SCSSs, JSs
import '../scss/styles.scss'
import '../../src/css/styles.css';
import '../../src/css/media-queries.css';

import $ from 'jquery'
import * as bootstrap from 'bootstrap'

import { initializeApp } from "firebase/app"
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
const storage = getStorage();

// Logo
getDownloadURL(ref(storage, 'github-readme-logo/github-logo-light.png'))
    .then((url) => {
        const img = document.getElementById('404-logo');
        img.setAttribute('src', url);
    })