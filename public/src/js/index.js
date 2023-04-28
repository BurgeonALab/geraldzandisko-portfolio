// CSSs, SCSSs, JSs
import '../css/styles.css';
import '../scss/styles.scss'
import '../css/animations.css';
import '../css/media-queries.css';
import '../css/tiny-slider.css'

import $ from 'jquery'
import * as bootstrap from 'bootstrap'
import { tns } from "tiny-slider"

import './firebase'
import './scripts'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

$(function() {
    if($('body').is('.home-page')) {
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
            "startIndex": 1
        })

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
            "autoplayButtonOutput": false
        })

        const tnslider3 = tns({
            "container": ".notable-work-slider",
            "mouseDrag": true,
            "controls": false,
            "nav": false,
            "gutter": 25,
            "edgePadding": 50,
            "startIndex": 0,
            "loop": false,
            "items": 2,
            "fixedWidth": 250,
        })
    }
})
