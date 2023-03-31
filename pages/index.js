import dynamic from "next/dynamic"
import Head from 'next/head'

const Social = dynamic(() => import('../components/HeaderSocial'))

function Header() {
	return (
		<Social />
	)
}

function HomePage() {
    return (
			<>
				<Head>
					<title>Home • Gerald Zandisko</title>
				</Head>
        <Header />
			</>
    )
}

export default HomePage