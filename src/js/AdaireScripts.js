var themeStatus = 'default'
FontAwesomeConfig = { autoReplaceSvg: 'nest' }
document.addEventListener('DOMContentLoaded', function () {
	// Scroll Effect
	$(window).on("scroll", function () {
		if ($(document).scrollTop() > 131) {
			if (themeStatus === 'default') {
				$('.navigation').addClass('shadow-nav');
			} else if (themeStatus === 'darkTheme') {
				$('.navigation').addClass('shadow-nav-dark');
			}
			$('.navbar-logo-container').addClass('show');
			$('.gerraour-nav').addClass('right');
			$('.gerraour-nav').removeClass('fade-in-nav');
		} else {
			if (themeStatus === 'default') {
				$('.navigation').removeClass('shadow-nav');
			} else if (themeStatus === 'darkTheme') {
				$('.navigation').removeClass('shadow-nav-dark');
			}
			$('.navbar-logo-container').removeClass('show');
			$('.gerraour-nav').removeClass('right');
			$('.gerraour-nav').addClass('fade-in-nav');
		}
	});
	// Remove Hash
	const linkBtn = $('.navbar-link, .link-style, .navbar-logo-container');
	linkBtn.on("click", function () {
		setTimeout(() => {
			removeHash();
		});
	});
	function removeHash() {
		history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
	}
	// Dark Mode
	$('#lightdark-mode').on("click", function () {
		if (themeStatus === 'default') {
			themeStatus = 'darkTheme';
			$('#gerraour-sun').removeClass('show-whatever-class');
			$('#gerraour-sun').addClass('hide-whatever-class');
			$('#gerraour-moon').addClass('show-whatever-class');
		} else if (themeStatus === 'darkTheme') {
			themeStatus = 'default';
			$('#gerraour-moon').removeClass('show-whatever-class');
			$('#gerraour-moon').addClass('hide-whatever-class');
			$('#gerraour-sun').addClass('show-whatever-class');
		}
		// Dark Mode - Body
		$('body').toggleClass("dark-mode");
		// Dark Mode - Logo
		var elm = $('.logo');
		var src = elm.attr('src');
		if (src === "https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2FLogo.webp?alt=media&token=5f7e5280-a9da-4d59-a7ba-f69dd7a1754a")
			elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2FLogoWhite.webp?alt=media&token=d8c0a9ea-d413-4b03-a1a8-e39fb9dd69ed')
		else
			elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2FLogo.webp?alt=media&token=5f7e5280-a9da-4d59-a7ba-f69dd7a1754a')
		// Dark Mode - Home Page & Privacy Page
		if ($('body').is('.home-page, .privacy-page')) {
			$('#navbehance').toggleClass("text-dark-mode");
			$('#navlinkedin').toggleClass("text-dark-mode");
			$('#navgithub').toggleClass("text-dark-mode");
			$('#navinstagram').toggleClass("text-dark-mode");
			$('#navtokopedia').toggleClass("text-dark-mode");
			$('#navx-social').toggleClass("text-dark-mode");
		}
		// Dark Mode - Navbar Logo
		if ($('body').is('.home-page')) {
			var elm = $('.navbar-logo');
			var src = elm.attr('src');
			if (src === "https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2FSmalllogo.webp?alt=media&token=7d30d8b9-8802-432d-8231-92bf0a0aa833")
				elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2FSmalllogoWhite.webp?alt=media&token=228752fa-8763-423b-9745-2d5ad8f26264');
			else
				elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2FSmalllogo.webp?alt=media&token=7d30d8b9-8802-432d-8231-92bf0a0aa833');
			// Dark Mode - Tiger Image
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
			if (tigerdark_src === "https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FTheTiger.webp?alt=media&token=6c1f2ca8-c88c-48d3-8bab-104e8f95af01")
				tigerdark_elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FWhiteCharacterPlaceholder.webp?alt=media&token=38c18d68-dd1c-4d72-9c55-73f8f42caf70')
			else
				tigerdark_elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FTheTiger.webp?alt=media&token=6c1f2ca8-c88c-48d3-8bab-104e8f95af01')
			// Dark Mode - Owl Image
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
				owl_elm.attr('href', '#');
			else
				owl_elm.attr('href', 'https://www.etsy.com/shop/ColorAndLightWallArt');
			// Image
			var owldark_elm = $('#owl-dark-mode');
			var owldark_src = owldark_elm.attr('src');
			if (owldark_src === "https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FTheOwl.webp?alt=media&token=8b360ab6-2e50-4138-b09b-17528c34296f")
				owldark_elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FWhiteCharacterPlaceholder.webp?alt=media&token=38c18d68-dd1c-4d72-9c55-73f8f42caf70');
			else
				owldark_elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FTheOwl.webp?alt=media&token=8b360ab6-2e50-4138-b09b-17528c34296f');
			// Dark Mode - Horse Image
			// Text
			var horse = document.getElementById("horse-text-dark");
			if (horse.innerHTML === 'Brown Horse by <span class="fw-bold">TBD</span>') {
				horse.innerHTML = `White Horse by <span class="fw-bold">TBD</span>`
			} else {
				horse.innerHTML = 'Brown Horse by <span class="fw-bold">TBD</span>'
			}
			// Link
			var horse_elm = $('.dark-mode-horse-link');
			var horse_href = horse_elm.attr('href');
			if (horse_href === "#")
				horse_elm.attr('href', '#');
			else
				horse_elm.attr('href', '#');

			// // Alt
			// var horsedark_alt = horsedark_elm.attr('alt');
			// if (horsedark_alt === "Brown Horse")
			// 	horsedark_elm.attr('alt', `White Horse`);
			// else
			// 	horsedark_elm.attr('alt', 'Brown Horse');

			// Dark Mode - Dragon Image
			// Text
			var dragon = document.getElementById("dragon-text-dark");
			if (dragon.innerHTML === 'Dragon Journal by <span class="fw-bold">Anna</span>') {
				dragon.innerHTML = `Dragon's Hunt by <span class="fw-bold">Eddie</span>`
			} else {
				dragon.innerHTML = 'Dragon Journal by <span class="fw-bold">Anna</span>'
			}
			// Link
			var dragon_elm = $('.dark-mode-dragon-link');
			var dragon_href = dragon_elm.attr('href');
			if (dragon_href === "https://www.etsy.com/shop/ArtSmartCraft")
				dragon_elm.attr('href', 'https://www.etsy.com/shop/MorningDewStudioArt');
			else
				dragon_elm.attr('href', 'https://www.etsy.com/shop/ArtSmartCraft');
			// Image
			var dragondark_elm = $('#dragon-image-dark');
			var dragondark_src = dragondark_elm.attr('src');
			if (dragondark_src === "https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FDragonJournal.webp?alt=media&token=4c4d805a-e63a-42bd-8100-3ad3d6374d2b")
				dragondark_elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FDragonHunt.webp?alt=media&token=f21e0cfa-ae6f-4553-93ba-249e849d8640')
			else
				dragondark_elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FDragonJournal.webp?alt=media&token=4c4d805a-e63a-42bd-8100-3ad3d6374d2b')
			// Alt
			var dragondark_alt = dragondark_elm.attr('alt');
			if (dragondark_alt === "Dragon Journal")
				dragondark_elm.attr('alt', `Dragon's Hunt`);
			else
				dragondark_elm.attr('alt', 'Dragon Journal');
			// Dark Mode - Peacock Image
			// Text
			var peacock = document.getElementById("peacock-text-dark");
			if (peacock.innerHTML === 'Blue Peacock by <span class="fw-bold">Myla</span>') {
				peacock.innerHTML = 'White Peacock on Branch by <span class="fw-bold">Mona</span>'
			} else {
				peacock.innerHTML = 'Blue Peacock by <span class="fw-bold">Myla</span>'
			}
			// Link
			var peacock_elm = $('.white-peacock-link');
			var peacock_href = peacock_elm.attr('href');
			if (peacock_href === "https://www.etsy.com/shop/MapleAndOakVintage")
				peacock_elm.attr('href', 'https://www.etsy.com/shop/MonaArtStudioDesigns')
			else
				peacock_elm.attr('href', 'https://www.etsy.com/shop/MapleAndOakVintage')
			// Image
			var peacockdark_elm = $('#blue-peacock-dark-mode img');
			var peacockdark_src = peacockdark_elm.attr('src');
			if (peacockdark_src === "https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FBluePeacock.webp?alt=media&token=f9c52b78-c83e-4cdb-8cc9-69a1a6f0de3f") {
				peacockdark_elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FWhitePeacock.webp?alt=media&token=2aa4e3a9-c4e3-4eeb-b3ed-cf14a8b05939');
				peacockdark_elm.addClass('white-peacock-image');
			} else {
				peacockdark_elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FBluePeacock.webp?alt=media&token=f9c52b78-c83e-4cdb-8cc9-69a1a6f0de3f');
				peacockdark_elm.removeClass('white-peacock-image');
			}
			// Alt
			var peacockdark_alt = peacockdark_elm.attr('alt');
			if (peacockdark_alt === "Blue Peacock")
				peacockdark_elm.attr('alt', 'White Peacock on Branch');
			else
				peacockdark_elm.attr('alt', 'Blue Peacock');
			// Dark Mode - Scenery Image
			var scenery = document.getElementById("scenery-text-dark");
			if (scenery.innerHTML === 'Green Scenery by <span class="fw-bold">TBD</span>') {
				scenery.innerHTML = 'White Scenery by <span class="fw-bold">TBD</span>'
			} else {
				scenery.innerHTML = 'Green Scenery by <span class="fw-bold">TBD</span>'
			}
			// Dark Mode - Stag Image
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
			if (stagdark_src === "https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FMonarchGlenStag.webp?alt=media&token=2591104a-2b7e-4e92-b477-08167129e572")
				stagdark_elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FWhiteStagPlaceholder.webp?alt=media&token=7d873b11-87d1-44de-8e19-8c5298826411')
			else
				stagdark_elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2Fcharacters%2FMonarchGlenStag.webp?alt=media&token=2591104a-2b7e-4e92-b477-08167129e572')
			// Dark Mode - Links
			$('#wisdomData').toggleClass("text-dark-mode");
			$('#article_section').toggleClass("text-dark-mode");
			// Article
			$('#article-list .article-item').toggleClass("article-item-dark-mode");
			$('#article-list .read-more-link').toggleClass("read-more-link-dark-mode");
			$('#article-list .article-author').toggleClass("text-dark-mode-grey");
			// Portfolio Description
			$('.portfolio-desc-box').toggleClass("description-dark-mode");
			$('.box-title-container p').toggleClass("text-dark-mode");
			$('.gerraour-avatar').toggleClass("dark-mode-avatar-shadow");
			var work = document.getElementById("work_section");
			work.classList.toggle("text-dark-mode");
			var contact = document.getElementById("contact_section");
			contact.classList.toggle("text-dark-mode");
			var navigation = document.getElementById("navigation-bar");
			navigation.classList.toggle("navigation-dark-mode");
			var aboutnav = document.getElementById("about-nav");
			aboutnav.classList.toggle("text-dark-mode");
			var readnav = document.getElementById("read-nav");
			readnav.classList.toggle("text-dark-mode");
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
			var readsection = document.getElementById("read-section");
			readsection.classList.toggle("text-dark-mode");
			var worksection = document.getElementById("work-section");
			worksection.classList.toggle("text-dark-mode");
			var contactsection = document.getElementById("contact-section");
			contactsection.classList.toggle("text-dark-mode");
			// Footer
			var footerbehance = document.getElementById("footer-behance");
			footerbehance.classList.toggle("text-dark-mode");
			var footerlinkedin = document.getElementById("footer-linkedin");
			footerlinkedin.classList.toggle("text-dark-mode");
			var footergithub = document.getElementById("footer-github");
			footergithub.classList.toggle("text-dark-mode");
			var footerinstagram = document.getElementById("footer-instagram");
			footerinstagram.classList.toggle("text-dark-mode");
			var footerxsocial = document.getElementById("footer-x-social");
			footerxsocial.classList.toggle("text-dark-mode");
			// End Footer
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
			var dragonbox = document.getElementById("dragon-image-dark-mode");
			dragonbox.classList.toggle("dragon-image-box-dark-mode");
			var horsebox = document.getElementById("horse-image-dark-mode");
			horsebox.classList.toggle("horse-image-box-dark-mode");
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
			var tropicanaticheaderdark = document.getElementById("tropicanatic-header-dark");
			tropicanaticheaderdark.classList.toggle("text-dark-mode-grey");
			var blawhiheaderdark = document.getElementById("blawhi-header-dark");
			blawhiheaderdark.classList.toggle("text-dark-mode-grey");
			var palmexdarkmode = document.getElementById("palmex-dark-mode");
			palmexdarkmode.classList.toggle("text-dark-mode");
			palmexdarkmode.classList.toggle("refined-notable-box-dark");
			var palmexheaderdark = document.getElementById("palmex-header-dark");
			palmexheaderdark.classList.toggle("text-dark-mode-grey");
			var palmexdarklink = document.getElementById("palmex-link-dark-mode");
			palmexdarklink.classList.toggle("text-dark-mode");
			var palmexdarkbehance = document.getElementById("palmex-behance-dark-mode");
			palmexdarkbehance.classList.toggle("text-dark-mode");
		}
		if ($('body').is('.privacy-page')) {
			$('.policies-content h1').toggleClass("text-dark-mode");
			$('.policies-content p').toggleClass("text-dark-mode");
			$('.policies-content h2').toggleClass("text-dark-mode");
			$('.policies-content li').toggleClass("text-dark-mode");
			$('.policies-content hr').toggleClass("hr-dark-mode");
		}
		if ($('body').is('.404-page')) {
			var page404 = document.getElementById("404-dark-mode");
			page404.classList.toggle("text-dark-mode");
			var home404 = document.getElementById("err404-link-dark-mode");
			home404.classList.toggle("text-dark-mode");
			var elm = $('.err404-logo')
			var src = elm.attr('src');
			if (src === "https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2F404.webp?alt=media&token=ba6e4d63-a6d5-4b7d-9780-556ca31feaf1")
				elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2F404White.webp?alt=media&token=314716cb-9d20-414e-8551-60144b2d6d46');
			else
				elm.attr('src', 'https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/images%2F404.webp?alt=media&token=ba6e4d63-a6d5-4b7d-9780-556ca31feaf1');
		}
	});
	if ($('body').is('.privacy-page')) {
		$('.nav-link').on("mouseenter mouseleave", function (event) {
			$(this).toggleClass('nav-link-hover')
		});
	}
});
