import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAnalytics, logEvent } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCU5SmyCTAmXUAUVeSCf0fVnA2OxlXHU-U",
  authDomain: "gerraour-bee69.firebaseapp.com",
  databaseURL:
    "https://gerraour-bee69-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gerraour-bee69",
  storageBucket: "gerraour-bee69.appspot.com",
  messagingSenderId: "923996121424",
  appId: "1:923996121424:web:1bc2f96ba78ec9a7062455",
  measurementId: "G-XDPT9XMJXM",
};
// App
const app = initializeApp(firebaseConfig);
// Analytics
const analytics = getAnalytics(app);
logEvent(analytics, "notification_received");
// DB
const db = getFirestore(app);
// Wisdom
const querySnapshot = await getDocs(collection(db, "wisdom"));
$(function () {
  if ($("body").is(".home-page")) {
    const wisdomData = document.getElementById("wisdomData");
    wisdomData.classList.add("wisdom-slider");
    querySnapshot.forEach((doc) => {
      for (var i = 1; i < querySnapshot.docs.length; i++) {
        let eachWisdom = document.createElement("DIV");
        wisdomData.appendChild(eachWisdom);
        // Title
        let itemH6 = document.createElement("H6");
        itemH6.classList.add("fw-bold", "italic-font");
        let itemH6Text = document.createTextNode(doc.data().album_name);
        itemH6.appendChild(itemH6Text);
        eachWisdom.appendChild(itemH6);
        // Song Name
        let itemH2 = document.createElement("P");
        itemH2.classList.add("fw-bold", "h2");
        let itemH2Text = document.createTextNode(doc.data().song_name);
        itemH2.appendChild(itemH2Text);
        eachWisdom.appendChild(itemH2);
        // Quote
        let wisdomFigure = document.createElement("FIGURE");
        wisdomFigure.classList.add("mb-0");
        eachWisdom.appendChild(wisdomFigure);
        let wisdomQuote = document.createElement("BLOCKQUOTE");
        wisdomQuote.classList.add("blockquote");
        wisdomFigure.appendChild(wisdomQuote);
        let itemP = document.createElement("P");
        let itemPText = document.createTextNode(doc.data().quote);
        itemP.classList.add("lead");
        itemP.appendChild(itemPText);
        wisdomQuote.appendChild(itemP);
        let wisdomCaption = document.createElement("FIGCAPTION");
        wisdomCaption.classList.add("blockquote-footer", "fw-bold", "mb-0");
        wisdomFigure.appendChild(wisdomCaption);
        // Artist Name
        let captionText = document.createTextNode(doc.data().artist_name);
        wisdomCaption.appendChild(captionText);
      }
    });
  }
});
