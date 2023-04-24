var themeStatus = 'default'

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 131) {
        if (themeStatus === 'default') {
            jQuery('.navigation').addClass('shadow-nav');
        } else if (themeStatus === 'darkTheme') {
            jQuery('.navigation').addClass('shadow-nav-dark');
        }
        jQuery('.navbar-logo-container').addClass('show');
        jQuery('.gerraour-nav').addClass('right');
        jQuery('.gerraour-nav').removeClass('fade-in-nav');
    } else {
        if (themeStatus === 'default') {
            jQuery('.navigation').removeClass('shadow-nav');
        } else if (themeStatus === 'darkTheme') {
            jQuery('.navigation').removeClass('shadow-nav-dark');
        }
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

$(document).ready(function() {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark === true) {
        // console.log('Dark mode');
    } else {
        // console.log('Light mode');
    }
    
    $('#lightdark-mode').click(function() {
        if (themeStatus === 'default') {
            themeStatus = 'darkTheme'
        } else if (themeStatus === 'darkTheme') {
            themeStatus = 'default'
        }
        var element = document.body;
        element.classList.toggle("dark-mode");

        $('#icon-switch').toggleClass('fa-sun fa-moon');
        $('#icon-switch').toggleClass('light-mode-button dark-mode-button');

        var elm = $('.logo');
        var src = elm.attr('src');
        if (src === "./images/logo.png")
            elm.attr('src', './images/logo_white.png')
        else
            elm.attr('src', './images/logo.png')

        if($('body').is('.home-page, .privacy-page')) {
            var navbehance = document.getElementById("navbehance");
            navbehance.classList.toggle("text-dark-mode");

            var navlinkedin = document.getElementById("navlinkedin");
            navlinkedin.classList.toggle("text-dark-mode");

            var navgithub = document.getElementById("navgithub");
            navgithub.classList.toggle("text-dark-mode");

            var navinstagram = document.getElementById("navinstagram");
            navinstagram.classList.toggle("text-dark-mode");
        }

        if($('body').is('.home-page')) {
            var elm = $('.navbar-logo')
            var src = elm.attr('src');
            if (src === "./images/small-logo.png")
                elm.attr('src', './images/small-logo_white.png')
            else
                elm.attr('src', './images/small-logo.png')

            var wisdom = document.getElementById("wisdomData");
            wisdom.classList.toggle("text-dark-mode");

            var work = document.getElementById("work_section");
            work.classList.toggle("text-dark-mode");

            var contact = document.getElementById("contact_section");
            contact.classList.toggle("text-dark-mode");

            var navigation = document.getElementById("navigation-bar");
            navigation.classList.toggle("navigation-dark-mode");

            var aboutnav = document.getElementById("about-nav");
            aboutnav.classList.toggle("text-dark-mode");

            var worknav = document.getElementById("work-nav");
            worknav.classList.toggle("text-dark-mode");

            var contactnav = document.getElementById("contact-nav");
            contactnav.classList.toggle("text-dark-mode");

            var footerwhatsapp = document.getElementById("footer-whatsapp");
            footerwhatsapp.classList.toggle("text-dark-mode");

            var footeremail = document.getElementById("footer-email");
            footeremail.classList.toggle("text-dark-mode");

            var aboutsection = document.getElementById("about-section");
            aboutsection.classList.toggle("text-dark-mode");

            var worksection = document.getElementById("work-section");
            worksection.classList.toggle("text-dark-mode");

            var contactsection = document.getElementById("contact-section");
            contactsection.classList.toggle("text-dark-mode");

            var footerbehance = document.getElementById("footer-behance");
            footerbehance.classList.toggle("text-dark-mode");

            var footerlinkedin = document.getElementById("footer-linkedin");
            footerlinkedin.classList.toggle("text-dark-mode");

            var footergithub = document.getElementById("footer-github");
            footergithub.classList.toggle("text-dark-mode");

            var footerinstagram = document.getElementById("footer-instagram");
            footerinstagram.classList.toggle("text-dark-mode");
            
            var privacyfooter = document.getElementById("privacy-dark-mode");
            privacyfooter.classList.toggle("text-dark-mode");

            var termsfooter = document.getElementById("terms-dark-mode");
            termsfooter.classList.toggle("text-dark-mode");

            var footerbackground = document.getElementById("contact_section");
            footerbackground.classList.toggle("footer-dark-mode");

            var owlbox = document.getElementById("owl-dark-mode");
            owlbox.classList.toggle("shadow-dark-mode");

            var tigerbox = document.getElementById("tiger-dark-mode");
            tigerbox.classList.toggle("shadow-dark-mode");

            var stagbox = document.getElementById("stag-dark-mode");
            stagbox.classList.toggle("shadow-dark-mode");

            var graphic = document.getElementById("graphic-dark-mode");
            graphic.classList.toggle("work-card-dark-mode");

            var web = document.getElementById("web-dark-mode");
            web.classList.toggle("work-card-dark-mode");

            var uiux = document.getElementById("uiux-dark-mode");
            uiux.classList.toggle("work-card-dark-mode");

            var quotes = document.getElementById("quotes-section");
            quotes.classList.toggle("text-dark-mode");
        }

        if($('body').is('.privacy-page')) {
            var privacytext = document.getElementById("privacy-text-dark-mode");
            privacytext.classList.toggle("text-dark-mode");
        }

        if($('body').is('.404-page')) {
            var page404 = document.getElementById("404-dark-mode");
            page404.classList.toggle("text-dark-mode");

            var home404 = document.getElementById("err404-link-dark-mode");
            home404.classList.toggle("text-dark-mode");

            var elm = $('.err404-logo')
            var src = elm.attr('src');
            if (src === "./images/404.png")
                elm.attr('src', './images/404_white.png')
            else
                elm.attr('src', './images/404.png')
        }
    });

    if($('body').is('.privacy-page')) {
        $('.nav-link').hover(function() {
            $(this).toggleClass('nav-link-hover')
        });
    }
});
