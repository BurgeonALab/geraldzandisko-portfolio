import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import {
  HeaderlogoPic
} from './Images'

const isBrowser = () => typeof window !== 'undefined'

function scrollToTop() {
  if (!isBrowser()) return
  history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function HeaderNav() {
  const aboutSection = () => {
    const element = document.getElementById('about_section')
    if (element) {
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 131)
    })
  }, [])

  return (
    <>
      <div className={scroll ? "navigation shadow-nav" : "navigation"}>
        <nav className="navbar navbar-expand p-0">
          <a onClick={scrollToTop} className={scroll ? "navbar-logo-container show" : "navbar-logo-container"}>
            <Image
              className="navbar-logo"
              alt="Gerald Zandisko Small Logo"
              src={HeaderlogoPic}
            />
          </a>
          <ul className={scroll ? "navbar-nav gerraour-nav right" : "navbar-nav gerraour-nav fade-in-nav"}>
            <li className="nav-item">
              <a className="nav-link fw-semibold navbar-link" onClick={aboutSection}>About</a>
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