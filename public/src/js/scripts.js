jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 131) {
        jQuery('.navigation').addClass('shadow-nav');
    } else {
        jQuery('.navigation').removeClass('shadow-nav');
    }
})

$(function() {
    const linkBtn = $('.navbar-link');
    linkBtn.click(() => {
        setTimeout(() => {
            removeHash();
        });
    });

    function removeHash() {
        history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }
});

$(function() {
    const linkBtn = $('.link-style');
    linkBtn.click(() => {
        setTimeout(() => {
            removeHash();
        });
    });

    function removeHash() {
        history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }
});

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
