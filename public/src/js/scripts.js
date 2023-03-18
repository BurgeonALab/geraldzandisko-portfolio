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

$(function() {
    $('.work-list-slider-button').click(function() {
        $(this).parent().find('.notable-description-width').fadeToggle();
    });
});
