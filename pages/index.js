import dynamic from "next/dynamic"
import Head from 'next/head'
import Image from 'next/image'
import {
	TheTiger,
	TheOwl
} from '../components/Images'

const Social = dynamic(() => import('../components/HeaderSocial'))
const Logo = dynamic(() => import('../components/HeaderLogo'))
const Nav = dynamic(() => import('../components/HeaderNav'))

function Header() {
	return (
		<>
			<Social />
			<Logo />
			<Nav />
		</>
	)
}

function Wisdom() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md d-flex flex-column justify-content-center" id="about_section">
						<div className="quote-mobile">
							<div>
								<div id="wisdomData">
									<h6 className="fw-bold italic-font">Entropy</h6>
									<h2 className="fw-bold">Wild Heart</h2>
									<figure className="mb-0">
										<blockquote className="blockquote">
											<p className="lead">Callus fingers from your strings, trying to make the guitar sing and once again release the joy it brings. But even with the old notes played, the strings are rusted and slightly frayed so I can't get it sounding quite the same.</p>
										</blockquote>
										<figcaption className="blockquote-footer fw-bold mb-0">The Collection</figcaption>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md image-pad-margin">
						<div className="container p-0">
							<div className="row">
								<div className="d-flex flex-column image-padding-mobile">
									<div className="image-owl-align">
										<Image
											className="about-image shadow rounded about-image-responsive"
											alt="The Owl"
											src={TheOwl}
											priority
										/>
										<div className="image-link-container image-title-mobile">
											<a href="https://www.etsy.com/shop/ColorAndLightWallArt" className="image-link" target="_blank">
												<p className="m-0">Intense Owl by <span className="fw-bold">Brad</span></p>
											</a>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-end flex-column image-padding-mobile">
									<div className="image-tiger-align">
										<Image
											className="about-image shadow rounded about-image-responsive"
											alt="The Tiger"
											src={TheTiger}
											priority
										/>
										<div className="image-link-container image-title-mobile">
											<a href="https://www.etsy.com/shop/MagicaArtPrints" className="image-link" target="_blank">
												<p className="m-0">Wandering Tiger by <span className="fw-bold">Vincent</span></p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

function HomePage() {
    return (
			<>
				<Head>
					<title>Home • Gerald Zandisko</title>
					<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
				</Head>
        <Header />
				<Wisdom />
			</>
    )
}

export default HomePage
