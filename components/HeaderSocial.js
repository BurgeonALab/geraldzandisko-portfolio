import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBehance,
    faGithub,
    faLinkedinIn,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

function HeaderSocial() {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="social-link nav-link behance p-3" href="https://www.behance.net/gerraour" target="_blank">
                    <FontAwesomeIcon icon={faBehance} />
                </a>
            </li>
            <li className="nav-item">
                <a className="social-link nav-link linkedin p-3" href="https://www.linkedin.com/in/gerraour/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </li>
            <li className="nav-item">
                <a className="social-link nav-link github p-3" href="https://github.com/gerraour" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li className="nav-item">
                <a className="social-link nav-link instagram p-3" href="https://www.instagram.com/gerraour/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
        </ul>
    )
}

export default HeaderSocial