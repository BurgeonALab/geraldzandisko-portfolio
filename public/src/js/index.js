// CSSs, SCSSs, JSs
import '../scss/styles.scss'
import '../../src/css/styles.css';
import '../../src/css/media-queries.css';

import $ from 'jquery'
import * as bootstrap from 'bootstrap'
import { tns } from "tiny-slider"

import '../js/firebase'
import '../js/scripts'

const tnslider1 = tns({
    "container": ".my-slider",
    "items": 1,
    "mouseDrag": true,
    "controls": false,
    "nav": false,
    "speed": 500,
    "gutter": 20,
    "edgePadding": 100,
    "autoplayHoverPause": "false",
    "preventScrollOnTouch": "auto"
})

const tnslider2 = tns({
    "container": ".work-list-slider",
    "mouseDrag": true,
    "controls": false,
    "nav": false,
    "speed": 500,
    "autoWidth": true,
    "gutter": 20,
    "edgePadding": 40,
    "autoplayHoverPause": "false",
    "preventScrollOnTouch": "auto"
})
