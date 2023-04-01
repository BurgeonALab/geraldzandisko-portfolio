import dynamic from "next/dynamic"
import Head from 'next/head'
import Image from 'next/image'
import {
	TheTiger,
	TheOwl
} from '../components/Images'
import { useState, useEffect } from "react"

const Social = dynamic(() => import('../components/HeaderSocial'))
const Logo = dynamic(() => import('../components/HeaderLogo'))
const Nav = dynamic(() => import('../components/HeaderNav'))
const Footer = dynamic(() => import('../components/Footer'))

const Portfolio = dynamic(() => import('../components/Portfolio'), {ssr: false})
const NotableWork = dynamic(() => import('../components/NotableWork'), {ssr: false})

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
	const [data, setData] = useState();

	useEffect(() => {
		async function fetchData() {
			const res = await fetch('https://v1.nocodeapi.com/gerraour/fbsdk/kHbCNnTBgSpcboNt/firestore/allDocuments?collectionName=wisdom',
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
					redirect: 'follow',
				},
			);
			const data = await res.json();
			setData(data)
		}
		fetchData()
	}, [])
	
	if (!data) {
		return (<div style={{ display: "none" }}>Loading...</div>)
	}
	return (
		<>
			<div className="container" id="about_section">
				<div className="row">
					<div className="col-md d-flex flex-column justify-content-center">
						<div className="quote-mobile">
							<div>
								<div id="wisdomData">
									{data.map((wisdom, index) => {
										return (
											<div key={index}>
												<h6 className="fw-bold italic-font">{wisdom._fieldsProto.album_name.stringValue}</h6>
												<h2 className="fw-semibold">{wisdom._fieldsProto.song_name.stringValue}</h2>
												<figure className="mb-0">
													<blockquote className="blockquote">
														<p className="lead">{wisdom._fieldsProto.quote.stringValue}</p>
													</blockquote>
													<figcaption className="blockquote-footer fw-bold mb-0">{wisdom._fieldsProto.artist_name.stringValue}</figcaption>
												</figure>
											</div>
										)
									})}
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
					{/* Favicon */}
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/favicon/site.webmanifest" />
					<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
					{/* Metas */}
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="robots" content="index, follow" />
    			<meta name="googlebot" content="follow" />
					<link rel="canoncial" href="https://www.gerraour.com" />
					<meta name="description" content="My personal website to showcase my art, quotes, portfolio, and other creations. You may also get to see my website development and designing skills." />
					<meta name="author" content="Gerald Zandisko, Ria Agustin" />
					{/* OGs */}
					<meta property="og:locale:alternate" content="id_ID" />
					<meta property="og:title" content="Home • Gerald Zandisko" />
					<meta property="og:description" content="My personal website to showcase my art, quotes, portfolio, and other creations. You may also get to see my website development and designing skills." />
					<meta property="og:type" content="website" />
					<meta property="og:image" content="/images/meta-cover/meta-cover.png" />
					<meta property="og:image:alt" content="Gerald Zandisko Logo Cover" />
					<meta property="og:url" content="https://www.gerraour.com" />
					<meta property="og:site_name" content="Gerald Zandisko" />
					{/* Twitters */}
					<meta name="twitter:title" content="Home • Gerald Zandisko" />
					<meta name="twitter:description" content="My personal website to showcase my art, quotes, portfolio, and other creations. You may also get to see my website development and designing skills." />
					<meta property="twitter:image" content="/images/meta-cover/meta-cover.png" />
					<meta property="twitter:image:alt" content="Gerald Zandisko Logo Cover" />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
        <Header />
				<Wisdom />
				<Portfolio />
				<NotableWork />
				<Footer />
			</>
    )
}

export default HomePage
