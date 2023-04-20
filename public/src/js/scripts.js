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
    const linkBtn = $('.navbar-link, .link-style, .navbar-logo-container');
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

$(document).ready(function() {
    $('#lightdark-mode').click(function() {
        var element = document.body;
        element.classList.toggle("dark-mode");

        var wisdom = document.getElementById("wisdomData");
        wisdom.classList.toggle("text-dark-mode");

        var work = document.getElementById("work_section");
        work.classList.toggle("text-dark-mode");

        var notable = document.getElementById("notable_section");
        notable.classList.toggle("text-dark-mode");

        var contact = document.getElementById("contact_section");
        contact.classList.toggle("text-dark-mode");

        var navigation = document.getElementById("navigation-bar");
        navigation.classList.toggle("navigation-dark-mode");

        var navbehance = document.getElementById("navbehance");
        navbehance.classList.toggle("text-dark-mode");

        var navlinkedin = document.getElementById("navlinkedin");
        navlinkedin.classList.toggle("text-dark-mode");

        var navgithub = document.getElementById("navgithub");
        navgithub.classList.toggle("text-dark-mode");

        var navinstagram = document.getElementById("navinstagram");
        navinstagram.classList.toggle("text-dark-mode");

        var aboutnav = document.getElementById("about-nav");
        aboutnav.classList.toggle("text-dark-mode");

        var worknav = document.getElementById("work-nav");
        worknav.classList.toggle("text-dark-mode");

        var contactnav = document.getElementById("contact-nav");
        contactnav.classList.toggle("text-dark-mode");
    });
});
