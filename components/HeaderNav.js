import Image from 'next/image'
import {
  HeaderlogoPic
} from './Images'

function HeaderNav() {
  return (
    <>
      <div className="navigation">
        <nav className="navbar navbar-expand p-0">
          <a href="#" className="navbar-logo-container">
            <Image
              className="navbar-logo"
              alt="Gerald Zandisko Small Logo"
              src={HeaderlogoPic}
            />
          </a>
          <ul className="navbar-nav gerraour-nav fade-in-nav">
            <li className="nav-item">
              <a className="nav-link fw-semibold navbar-link" href="#about_section">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold navbar-link" href="#work_section">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold navbar-link" href="#contact_section">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default HeaderNav