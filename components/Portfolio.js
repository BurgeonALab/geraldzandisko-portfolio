import Image from 'next/image'
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBehanceSquare,
    faGithubSquare
} from '@fortawesome/free-brands-svg-icons'

const settings = {
  mouseDrag: true,
  controls: false,
  nav: false,
  gutter: 20,
  speed: 500,
  edgePadding: 100,
  loop: false,
  rewind: true,
  startIndex: 1,
  lazyload: true,
}

const workportfolio = [
  {
    "name": "Graphic Designer",
    "description": "As a graphic designer, I spend most of my time creating and working within design systems—working closely with type, layout, and all of the details in between.",
    "image": "/../public/images/sliders/graphic-design.png",
    "social": {
      "behance": "https://behance.net/gerraour",
      "github": "",
    }
  },
  {
    "name": "Web App Development",
    "description": "I have developed various types of front-ends, from a company profile website to an e-commerce platform to a point-of-sale application. I'm passionate about developing cutting-edge and beautiful interfaces.",
    "image": "/../public/images/sliders/webdev-cover.png",
    "social": {
      "behance": "",
      "github": "https://github.com/gerraour/",
    }
  },
  {
    "name": "UI/UX Design",
    "description": "I also focus on crafting good user experiences and designing systems for web and mobile applications. As a UI/UX designer, I understand that user interfaces should look good, solve problems, and provide solutions that are simple and elegant.",
    "image": "/../public/images/sliders/uiux-cover.png",
    "social": {
      "behance": "https://behance.net/gerraour",
      "github": "",
    }
  }
]

function Portfolio() {
  return (
    <>
      <div className="container work-margin" id="work_section">
        <div className="row">
          <div className="col-md">
            <div className="work-padding-mobile">
              <div className="box-title-container d-flex py-2 px-3 flex-row mb-3">
                <p className="mb-0 fw-bold">PORTFOLIO</p>
              </div>
              <h1 className="fw-bold mb-2">Gerald Zandisko</h1>
              <h2 className="fw-normal mb-2">Designer</h2>
              <p className="lead mb-0">I mostly design logos, social media posts, and magazines. I'm also fairly experienced in web design and front-end web development. I enjoy exploring complex problems in search of delightful inspirations.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Slider */}
      <div className="container-fluid">
        <div className="row">
          <TinySlider settings={settings}>
            {workportfolio.map((work, index) => {
              return (
                <div key={index}>
                  <div className="work-card-container">
                    <Image
                      className={"work-card-size rounded shadow"}
                      alt="Graphic Design"
                      src={work.image}
                      width={640}
                      height={350}
                      priority
                    />
                    <div className="work-card-overlay rounded">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-6 work-card-padding-mobile">
                            <h2 className="mb-2 fw-semibold">{work.name}</h2>
                            <p className="lead mb-0 fw-light">{work.description}</p>
                          </div>
                          <div className="col-md-6 work-card-padding-mobile d-flex flex-column align-items-end justify-content-end">
                            <h5 className="mb-2 fw-light">To find out more</h5>
                            {work.social.github ?
                              <a href="https://behance.net/gerraour" target="_blank" className="portfolio-social-button github">
                                <h1 className="mb-0">
                                  <FontAwesomeIcon icon={faGithubSquare} />
                                </h1>
                              </a>
                              : ""
                            }
                            {work.social.behance ?
                              <a href="https://behance.net/gerraour" target="_blank" className="portfolio-social-button behance">
                                <h1 className="mb-0">
                                  <FontAwesomeIcon icon={faBehanceSquare} />
                                </h1>
                              </a>
                              : ""
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </TinySlider>
        </div>
      </div>
    </>
  )
}

export default Portfolio