import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  SmallLogo
} from '../components/Images'

function Content404() {
  return (
    <>
      <div className="content d-flex err404-center">
        <div className="p-5">
          <Image
            src={SmallLogo}
            alt="Gerald Zandisko Small Logo"
            className="img-fluid err404-logo mb-5"
            priority
          />
          <h1 className="text-center mb-2">Page Not Found</h1>
          <p className="text-center mb-2 fw-light">Sorry, the page you were looking for was not found</p>
          <div className="d-flex justify-content-center">
            <Link href="/" legacyBehavior>
              <a href="https://www.gerraour.com" className="err404-link">Return Home</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found • Gerald Zandisko</title>
        {/* Favicon */}
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        {/* Metas */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* OGs */}
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:title" content="404 Not Found • Gerald Zandisko" />
        <meta property="og:site_name" content="Gerald Zandisko" />
      </Head>
      <Content404 />
    </>
  )
}