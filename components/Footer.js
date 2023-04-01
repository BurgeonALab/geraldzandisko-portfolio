import Link from 'next/link'
import Image from 'next/image'
import {
  MonarchGlenStag
} from './Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faWhatsapp,
    faBehance,
    faGithub,
    faLinkedinIn,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

function Footer() {
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

  return (
    <>
      <footer className="container shadow-lg p-5 footer footer-mobile" id="contact_section">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-stag-image-box">
              <Image
                src={MonarchGlenStag}
                alt="Monarch of the Glen Stag"
                className="footer-stag-image shadow rounded"
                priority
              />
              <div className="image-link-container image-title-mobile image-title-footer-mobile">
                <a href="https://www.etsy.com/shop/InstantGraphics" className="image-link" target="_blank">
                  <p className="m-0">Monarch of the Glen Stag by <span className="fw-bold">Steve</span></p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 p-0">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-3">
                  <div>
                    <h4 className="fw-bold mb-3">Get in Touch</h4>
                    <p className="fw-light">Have a project? I would love to help. Let's work together!</p>
                  </div>
                  <div>
                    <div>
                      <p className="mb-3 fw-bold">Message or Email Me</p>
                      <div className="contact-footer-mobile">
                        <a className="contact-footer whatsapp d-inline-block me-3" href="https://wa.me/+628116300048" target="_blank">
                          <div className="d-flex align-items-center">
                            <h3 className="m-0 d-flex">
                              <FontAwesomeIcon icon={faWhatsapp} />
                            </h3>
                          </div>
                        </a>
                        <a className="contact-footer email d-inline-block me-3" href="mailto:mailme@gerraour.com">
                          <div className="d-flex align-items-center">
                            <h3 className="m-0 d-flex">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h4 className="mb-3 fw-bold extra-margin-mobile">Sections</h4>
                  <div className="d-flex link-footer-justify">
                    <a onClick={AboutClick} className="link-style mb-3 d-inline-block fw-light">About</a>
                  </div>
                  <div className="d-flex link-footer-justify">
                    <a onClick={WorkClick} className="link-style mb-3 d-inline-block fw-light">Work</a>
                  </div>
                  <div className="d-flex link-footer-justify">
                    <a onClick={ContactClick} className="link-style mb-3 d-inline-block fw-light">Contact</a>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h4 className="mb-3 fw-bold extra-margin-mobile">Services</h4>
                  <p className="non-link-style mb-3 fw-light">Graphic Design</p>
                  <p className="non-link-style mb-3 fw-light">Front-end Web Development</p>
                  <p className="non-link-style mb-3 fw-light">User Interface (UI) Design</p>
                  <p className="non-link-style mb-3 fw-light">User Experience (UX) Design</p>
                </div>
                <div className="col-sm-3">
                  <h4 className="mb-3 fw-bold extra-margin-mobile">Connect</h4>
                  <div className="social-media-footer-margin">
                    <a href="https://www.behance.net/gerraour" target="_blank" className="social-media-footer behance">
                      <h4 className="mb-3">
                        <FontAwesomeIcon icon={faBehance} className="me-3 social-media" />
                      </h4>
                    </a>
                    <a href="https://www.linkedin.com/in/gerraour/" target="_blank" className="social-media-footer linkedin">
                      <h4 className="mb-3">
                        <FontAwesomeIcon icon={faLinkedinIn} className="me-3 social-media" />
                      </h4>
                    </a>
                    <a href="https://github.com/gerraour" target="_blank" className="social-media-footer github">
                      <h4 className="mb-3">
                        <FontAwesomeIcon icon={faGithub} className="me-3 social-media" />
                      </h4>
                    </a>
                    <a href="https://www.instagram.com/gerraour/" target="_blank" className="social-media-footer instagram">
                      <h4 className="mb-3">
                        <FontAwesomeIcon icon={faInstagram} className="me-3 social-media" />
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 copyrights-misc copyrights-misc-mobile">
            <p className="mb-0 fw-light">&#169; 2023 <span className="fw-bold">Gerald Zandisko</span>. All rights reserved</p>
          </div>
          <div className="col-lg-6 copyrights-misc d-flex justify-content-end align-items-end">
            <Link href="/privacy-policy" legacyBehavior>
              <a className="privacy-terms fw-light d-inline-block ms-3">
                <p className="mb-0">Privacy Policy</p>
              </a>
            </Link>
            <Link href="/terms-and-conditions" legacyBehavior>
              <a className="privacy-terms fw-light d-inline-block ms-3">
                <p className="mb-0">Terms & Conditions</p>
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
