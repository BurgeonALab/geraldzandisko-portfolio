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
import './firebase';

// jQuerys
import './scripts';

// Icon
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBagShopping, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faGithub, faLinkedinIn, faBehance } from '@fortawesome/free-brands-svg-icons';
library.add(faBagShopping, faXTwitter, faInstagram, faGithub, faLinkedinIn, faBehance, faSun, faMoon);

// Calender
import './news-calendar';

// Schema
import './schema';

// Bootstrap
import * as bootstrap from 'bootstrap';
import '../scss/styles.scss';
import '../css/tiny-slider.css';

// CSS
import '../css/styles.css';
import '../css/animations.css';
import '../css/media-queries.css';

dom.i2svg();