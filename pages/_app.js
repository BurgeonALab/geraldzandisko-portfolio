import { useEffect } from "react";

import '../public/src/css/styles.css';
import '../public/src/scss/styles.scss';
import '../public/src/css/animations.css';
import '../public/src/css/media-queries.css';
import 'bootstrap/dist/css/bootstrap.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
    }, []);
    
    return <Component {...pageProps} />
}