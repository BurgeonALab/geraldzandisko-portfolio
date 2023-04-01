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
  const AboutClick = () => {
    const about = document.getElementById('about_section')
    if (about) {
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
      about.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const WorkClick = () => {
    const work = document.getElementById('work_section')
    if (work) {
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
      work.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const ContactClick = () => {
    const contact = document.getElementById('contact_section')
    if (contact) {
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
      contact.scrollIntoView({ behavior: 'smooth' })
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
              priority
            />
          </a>
          <ul className={scroll ? "navbar-nav gerraour-nav right" : "navbar-nav gerraour-nav fade-in-nav"}>
            <li className="nav-item">
              <a className="nav-link fw-semibold navbar-link" onClick={AboutClick}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold navbar-link" onClick={WorkClick}>Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold navbar-link" onClick={ContactClick}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default HeaderNav