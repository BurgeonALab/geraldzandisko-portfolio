import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

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
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "wisdom"));
const wisdomData = document.getElementsByClassName('wisdomData')[0];
querySnapshot.forEach((doc) => {
    let itemH6 = document.createElement('H6');
    itemH6.classList.add('fw-bold', 'italic-font');
    let itemH6Text = document.createTextNode(doc.data().album_name);
    
    itemH6.appendChild(itemH6Text);
    wisdomData.appendChild(itemH6);

    let itemH1 = document.createElement('H1');
    itemH1.classList.add('fw-bold');
    let itemH1Text = document.createTextNode(doc.data().song_name);
    
    itemH1.appendChild(itemH1Text);
    wisdomData.appendChild(itemH1);

    let wisdomFigure = document.createElement('FIGURE');
    wisdomFigure.classList.add('mb-0');
    wisdomData.appendChild(wisdomFigure);

    let wisdomQuote = document.createElement('BLOCKQUOTE');
    wisdomQuote.classList.add('blockquote');
    wisdomFigure.appendChild(wisdomQuote)

    let itemP = document.createElement('P');
    let itemPText = document.createTextNode(doc.data().quote);
    itemP.classList.add('lead');

    itemP.appendChild(itemPText);
    wisdomQuote.appendChild(itemP);

    let wisdomCaption = document.createElement('FIGCAPTION');
    wisdomCaption.classList.add('blockquote-footer', 'fw-bold' , 'mb-0');
    wisdomFigure.appendChild(wisdomCaption);

    let captionText = document.createTextNode(doc.data().artist_name);
    wisdomCaption.appendChild(captionText);
})
