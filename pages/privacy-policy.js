import Head from 'next/head'

function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy • Gerald Zandisko</title>
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
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="robots" content="index, follow" />
    		<meta name="googlebot" content="follow" />
				<link rel="canoncial" href="https://www.gerraour.com/privacy-policy" />
				<meta name="description" content="Gerald Zandisko (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Gerald Zandisko." />
				<meta name="author" content="Gerald Zandisko, Ria Agustin" />
				{/* OGs */}
				<meta property="og:locale:alternate" content="id_ID" />
				<meta property="og:title" content="Privacy Policy • Gerald Zandisko" />
				<meta property="og:description" content="Gerald Zandisko (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Gerald Zandisko." />
				<meta property="og:type" content="article" />
				<meta property="og:image" content="/images/meta-cover/meta-cover.png" />
				<meta property="og:image:alt" content="Gerald Zandisko Logo Cover" />
				<meta property="og:url" content="https://www.gerraour.com/privacy-policy" />
				<meta property="og:site_name" content="Gerald Zandisko" />
				{/* Twitters */}
				<meta name="twitter:title" content="Privacy Policy • Gerald Zandisko" />
				<meta name="twitter:description" content="Gerald Zandisko (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Gerald Zandisko." />
				<meta property="twitter:image" content="/images/meta-cover/meta-cover.png" />
				<meta property="twitter:image:alt" content="Gerald Zandisko Logo Cover" />
				<meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  )
}

export default PrivacyPolicy
