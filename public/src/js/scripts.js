// Scroll Effect
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

// Hide Link
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

// Dark Mode
function darkMode() {
    console.log("Theme change: Dark");
}

function lightMode() {
    console.log("Theme Change: Light");
}

const currentTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (currentTheme === true) {
        console.log("Current theme: Dark");
    } else {
        console.log("Current theme: Light");
    }

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const switchTheme = event.matches ? "Dark mode" : "Light Mode";
    if (switchTheme === "Dark mode") {
        darkMode();
    } else if (switchTheme === 'Light Mode') {
        lightMode();
    }
})

var themeStatus = 'default'
$(document).ready(function() {
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
        if (src === "./images/Logo.webp")
            elm.attr('src', './images/LogoWhite.webp')
        else
            elm.attr('src', './images/Logo.webp')

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
            if (src === "./images/Smalllogo.webp")
                elm.attr('src', './images/SmalllogoWhite.webp')
            else
                elm.attr('src', './images/Smalllogo.webp')
            
            // Text
            var tiger = document.getElementById("tiger-text-dark");
            if (tiger.innerHTML === 'Wandering Tiger by <span class="fw-bold">Vincent</span>') {
                tiger.innerHTML = 'White Tiger by <span class="fw-bold">TBD</span>'
            } else {
                tiger.innerHTML = 'Wandering Tiger by <span class="fw-bold">Vincent</span>'
            }
            // Link
            var tiger_elm = $('.white-tiger-link');
            var tiger_href = tiger_elm.attr('href');
            if (tiger_href === "https://www.etsy.com/shop/MagicaArtPrints")
                tiger_elm.attr('href', '#')
            else
                tiger_elm.attr('href', 'https://www.etsy.com/shop/MagicaArtPrints')
            // Image
            var tigerdark_elm = $('#tiger-dark-mode');
            var tigerdark_src = tigerdark_elm.attr('src');
            if (tigerdark_src === "./images/characters/TheTiger.webp")
                tigerdark_elm.attr('src', './images/characters/WhiteCharacterPlaceholder.webp')
            else
                tigerdark_elm.attr('src', './images/characters/TheTiger.webp')

            // Text
            var owl = document.getElementById("owl-text-dark");
            if (owl.innerHTML === 'Intense Owl by <span class="fw-bold">Brad</span>') {
                owl.innerHTML = 'White Owl by <span class="fw-bold">TBD</span>'
            } else {
                owl.innerHTML = 'Intense Owl by <span class="fw-bold">Brad</span>'
            }
            // Link
            var owl_elm = $('.white-owl-link');
            var owl_href = owl_elm.attr('href');
            if (owl_href === "https://www.etsy.com/shop/ColorAndLightWallArt")
                owl_elm.attr('href', '#')
            else
                owl_elm.attr('href', 'https://www.etsy.com/shop/ColorAndLightWallArt')
            // Image
            var owldark_elm = $('#owl-dark-mode');
            var owldark_src = owldark_elm.attr('src');
            if (owldark_src === "./images/characters/TheOwl.webp")
                owldark_elm.attr('src', './images/characters/WhiteCharacterPlaceholder.webp')
            else
                owldark_elm.attr('src', './images/characters/TheOwl.webp')

            // Text
            var peacock = document.getElementById("peacock-text-dark");
            if (peacock.innerHTML === 'Blue Peacock by <span class="fw-bold">Myla</span>') {
                peacock.innerHTML = 'White Peacock by <span class="fw-bold">TBD</span>'
            } else {
                peacock.innerHTML = 'Blue Peacock by <span class="fw-bold">Myla</span>'
            }
            // Link
            var peacock_elm = $('.white-peacock-link');
            var peacock_href = peacock_elm.attr('href');
            if (peacock_href === "https://www.etsy.com/shop/MapleAndOakVintage")
                peacock_elm.attr('href', '#')
            else
                peacock_elm.attr('href', 'https://www.etsy.com/shop/MapleAndOakVintage')
            // Image
            var peacockdark_elm = $('#blue-peacock-dark-mode img');
            var peacockdark_src = peacockdark_elm.attr('src');
            if (peacockdark_src === "./images/characters/BluePeacock.webp")
                peacockdark_elm.attr('src', './images/characters/WhiteCharacterPlaceholder.webp')
            else
                peacockdark_elm.attr('src', './images/characters/BluePeacock.webp')

            var scenery = document.getElementById("scenery-text-dark");
            if (scenery.innerHTML === 'Green Scenery by <span class="fw-bold">TBD</span>') {
                scenery.innerHTML = 'White Scenery by <span class="fw-bold">TBD</span>'
            } else {
                scenery.innerHTML = 'Green Scenery by <span class="fw-bold">TBD</span>'
            }

            // Text
            var stag = document.getElementById("monarch-text-dark");
            if (stag.innerHTML === 'Monarch of the Glen Stag by <span class="fw-bold">Steve</span>') {
                stag.innerHTML = 'White Stag by <span class="fw-bold">TBD</span>'
            } else {
                stag.innerHTML = 'Monarch of the Glen Stag by <span class="fw-bold">Steve</span>'
            }
            // Link
            var stag_elm = $('.white-stag-link');
            var stag_href = stag_elm.attr('href');
            if (stag_href === "https://www.etsy.com/shop/InstantGraphics")
                stag_elm.attr('href', '#')
            else
                stag_elm.attr('href', 'https://www.etsy.com/shop/InstantGraphics')
            // Image
            var stagdark_elm = $('#stag-dark-mode');
            var stagdark_src = stagdark_elm.attr('src');
            if (stagdark_src === "./images/characters/MonarchGlenStag.webp")
                stagdark_elm.attr('src', './images/characters/WhiteStagPlaceholder.webp')
            else
                stagdark_elm.attr('src', './images/characters/MonarchGlenStag.webp')
            
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

            var cookiefooter = document.getElementById("cookie-dark-mode");
            cookiefooter.classList.toggle("text-dark-mode");

            var termsfooter = document.getElementById("terms-dark-mode");
            termsfooter.classList.toggle("text-dark-mode");

            var footerbackground = document.getElementById("contact_section");
            footerbackground.classList.toggle("footer-dark-mode");

            var owlbox = document.getElementById("owl-dark-mode");
            owlbox.classList.toggle("shadow-dark-mode");

            var tigerbox = document.getElementById("tiger-dark-mode");
            tigerbox.classList.toggle("shadow-dark-mode");

            var peacockbox = document.getElementById("blue-peacock-dark-mode");
            peacockbox.classList.toggle("refined-character-image-box-dark");

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

            var refinednotable = document.getElementById("refined-notable-work");
            refinednotable.classList.toggle("text-dark-mode");

            var bacteriadarkmode = document.getElementById("bacteria-booster-dark-mode");
            bacteriadarkmode.classList.toggle("text-dark-mode");
            bacteriadarkmode.classList.toggle("refined-notable-box-dark");
            var bacteriadarklink = document.getElementById("bacteria-booster-link-dark-mode");
            bacteriadarklink.classList.toggle("text-dark-mode");
            var bacteriadarkbehance = document.getElementById("bacteria-booster-behance-dark-mode");
            bacteriadarkbehance.classList.toggle("text-dark-mode");

            var semestadarkmode = document.getElementById("semesta-dark-mode");
            semestadarkmode.classList.toggle("text-dark-mode");
            semestadarkmode.classList.toggle("refined-notable-box-dark");
            var semestadarklink = document.getElementById("semesta-link-dark-mode");
            semestadarklink.classList.toggle("text-dark-mode");
            var semestadarkbehance = document.getElementById("semesta-behance-dark-mode");
            semestadarkbehance.classList.toggle("text-dark-mode");

            var tropicanaticdarkmode = document.getElementById("tropicanatic-dark-mode");
            tropicanaticdarkmode.classList.toggle("text-dark-mode");
            tropicanaticdarkmode.classList.toggle("refined-notable-box-dark");
            var tropicanaticdarklink = document.getElementById("tropicanatic-link-dark-mode");
            tropicanaticdarklink.classList.toggle("text-dark-mode");
            var tropicanaticdarkbehance = document.getElementById("tropicanatic-behance-dark-mode");
            tropicanaticdarkbehance.classList.toggle("text-dark-mode");

            var blawhidarkmode = document.getElementById("blawhi-dark-mode");
            blawhidarkmode.classList.toggle("text-dark-mode");
            blawhidarkmode.classList.toggle("refined-notable-box-dark");
            var blawhidarklink = document.getElementById("blawhi-link-dark-mode");
            blawhidarklink.classList.toggle("text-dark-mode");
            var blawhidarkbehance = document.getElementById("blawhi-behance-dark-mode");
            blawhidarkbehance.classList.toggle("text-dark-mode");
            var blawhidarkgithub = document.getElementById("blawhi-github-dark-mode");
            blawhidarkgithub.classList.toggle("text-dark-mode");

            var medandarkmode = document.getElementById("medan-ai-dark-mode");
            medandarkmode.classList.toggle("text-dark-mode");
            medandarkmode.classList.toggle("refined-notable-box-dark");
            var medandarklink = document.getElementById("medan-ai-link-dark-mode");
            medandarklink.classList.toggle("text-dark-mode");
            var medanbehancedark = document.getElementById("medan-ai-behance-dark-link");
            medanbehancedark.classList.toggle("text-dark-mode");

            var palmdarkmode = document.getElementById("palm-dark-mode");
            palmdarkmode.classList.toggle("text-dark-mode");
            palmdarkmode.classList.toggle("refined-notable-box-dark");
            var palmdarklink = document.getElementById("palm-link-dark-mode");
            palmdarklink.classList.toggle("text-dark-mode");
            var palmbehancedark = document.getElementById("palm-behance-dark-mode");
            palmbehancedark.classList.toggle("text-dark-mode");
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
            if (src === "./images/404.webp")
                elm.attr('src', './images/404White.webp')
            else
                elm.attr('src', './images/404.webp')
        }
    });

    if($('body').is('.privacy-page')) {
        $('.nav-link').hover(function() {
            $(this).toggleClass('nav-link-hover')
        });
    }
});
