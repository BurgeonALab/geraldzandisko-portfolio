import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"
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
const db = getFirestore(app);
const storage = getStorage();


// Wisdom
const querySnapshot = await getDocs(collection(db, "wisdom"));
$(function() {
    if($('body').is('.home-page')) {
        const wisdomData = document.getElementById('wisdomData');
            querySnapshot.forEach((doc) => {
                let itemH6 = document.createElement('H6');
                itemH6.classList.add('fw-bold', 'italic-font');
                let itemH6Text = document.createTextNode(doc.data().album_name);
    
                itemH6.appendChild(itemH6Text);
                wisdomData.appendChild(itemH6);

                let itemH2 = document.createElement('H2');
                itemH2.classList.add('fw-bold');
                let itemH2Text = document.createTextNode(doc.data().song_name);
    
                itemH2.appendChild(itemH2Text);
                wisdomData.appendChild(itemH2);

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
        }
})

$(function() {
    if($('body').is('.home-page')) {
        // Logo
        getDownloadURL(ref(storage, 'logo/logo.png'))
            .then((url) => {
                const img = document.getElementById('gerraour-logo');
                img.setAttribute('src', url);
            })

        // The Owl
        getDownloadURL(ref(storage, 'character/the-owl-compressed.jpg'))
            .then((url) => {
                const img = document.getElementById('the-owl-img');
                img.setAttribute('src', url);
            })

        // The Tiger
        getDownloadURL(ref(storage, 'character/the-tiger-compressed.jpg'))
            .then((url) => {
                const img = document.getElementById('the-tiger-img');
                img.setAttribute('src', url);
            })

        // Blue Peacock
        getDownloadURL(ref(storage, 'character/blue-peacock-compressed.jpg'))
            .then((url) => {
                const img = document.getElementById('blue-peacock');
                img.setAttribute('src', url);
            })

        // Monarch of the Glen Stag
        getDownloadURL(ref(storage, 'character/monarch-of-the-glen-stag-compressed.jpg'))
            .then((url) => {
                const img = document.getElementById('monarch-of-the-glen-stag');
                img.setAttribute('src', url);
            })

        // Web App
        getDownloadURL(ref(storage, 'portfolio-cover/webdev-cover.png'))
            .then((url) => {
                const img = document.getElementById('webapp-dev');
                img.setAttribute('src', url);
            })

        // UI UX
        getDownloadURL(ref(storage, 'portfolio-cover/uiux-cover.png'))
            .then((url) => {
                const img = document.getElementById('uiux-design');
                img.setAttribute('src', url);
            })

        // Graphic Design
        getDownloadURL(ref(storage, 'portfolio-cover/graphic-design.png'))
            .then((url) => {
                const img = document.getElementById('graphic-design');
                img.setAttribute('src', url);
            })

        // Bacteria Booster
        getDownloadURL(ref(storage, 'notable-work/bacteria-booster.png'))
            .then((url) => {
                const img = document.getElementById('bacteria-booster');
                img.setAttribute('src', url);
            })

        // Semesta Sakti
        getDownloadURL(ref(storage, 'notable-work/semesta-sakti.png'))
            .then((url) => {
                const img = document.getElementById('semesta-sakti');
                img.setAttribute('src', url);
            })

        // Tropicanatic
        getDownloadURL(ref(storage, 'notable-work/tropicanatic.png'))
            .then((url) => {
                const img = document.getElementById('kopi-tropicanatic');
                img.setAttribute('src', url);
            })

        // Warung Kopi
        getDownloadURL(ref(storage, 'notable-work/warung-kopi.png'))
            .then((url) => {
                const img = document.getElementById('warung-kopi');
                img.setAttribute('src', url);
            })
        }
});

// Logo
$(function() {
    if($('body').is('.error-page-404, .home-page')) {
        getDownloadURL(ref(storage, 'github-readme-logo/github-logo-light.png'))
            .then((url) => {
                const img = document.getElementById('404-logo');
                img.setAttribute('src', url);
            })
        }
})

// Logo
$(function() {
    if($('body').is('.privacy-terms-page')) {
        getDownloadURL(ref(storage, 'logo/logo.png'))
            .then((url) => {
                const img = document.getElementById('gerraour-logo');
                img.setAttribute('src', url);
            })
        }
})