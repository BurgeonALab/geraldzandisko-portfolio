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
  }});