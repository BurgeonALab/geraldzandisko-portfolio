jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 131) {
        jQuery('.navigation').addClass('shadow-nav');
        jQuery('.navbar-logo-container').addClass('show');
        jQuery('.gerraour-nav').addClass('right');
        jQuery('.gerraour-nav').removeClass('fade-in-nav');
    } else {
        jQuery('.navigation').removeClass('shadow-nav');
        jQuery('.navbar-logo-container').removeClass('show');
        jQuery('.gerraour-nav').removeClass('right');
        jQuery('.gerraour-nav').addClass('fade-in-nav');
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
