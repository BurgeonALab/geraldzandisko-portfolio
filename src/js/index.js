// Schema
import './AdaireSchema';
// jQuery
import $ from 'jquery';
// Tiny Slider
import { tns } from "tiny-slider";
$(function () {
  if ($('body').is('.home-page')) {
    const tnslider1 = tns({
      "container": ".my-slider",
      "mouseDrag": true,
      "controls": false,
      "nav": false,
      "speed": 500,
      "gutter": 20,
      "edgePadding": 100,
      "loop": false,
      "rewind": true,
      "startIndex": 1,
    });
    const tnslider2 = tns({
      "container": ".wisdom-slider",
      "mouseDrag": false,
      "controls": false,
      "nav": false,
      "speed": 500,
      "mode": "gallery",
      "items": 1,
      "autoplay": true,
      "autoplayTimeout": 10000,
      "autoplayButtonOutput": false,
      "touch": false,
    });
    const tnslider3 = tns({
      "container": ".notable-work-slider",
      "mouseDrag": true,
      "controls": false,
      "nav": false,
      "gutter": 25,
      "edgePadding": 50,
      "startIndex": 0,
      "loop": false,
      "fixedWidth": 250,
    });
  }
});
// Firebase
import './AdaireFirebase';
// jQuerys
import './AdaireScripts';
// Icon
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBagShopping, faSun, faMoon, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faGithub, faLinkedinIn, faBehance, faWhatsapp, faBehanceSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
library.add(faBagShopping, faXTwitter, faInstagram, faGithub, faLinkedinIn, faBehance, faSun, faMoon, faWhatsapp, faEnvelope, faBehanceSquare, faGithubSquare);
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Style
import '../css/AdaireSlider.css';
// CSS
import '../css/AdaireStyles.css';
import '../css/AdaireAnimations.css';
import '../css/AdaireResponsive.css';
// Images
import './images';
dom.i2svg();