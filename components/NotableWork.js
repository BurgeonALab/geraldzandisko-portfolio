import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBehanceSquare,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons'
import {
  BluePeacock
} from './Images'

const notablework = [
  {
    "name": "Coffee Shop Management Mobile Application Development",
    "image": "/../public/images/notable-work/warung-kopi.png",
    "description": "Café POS that facilitates business processes to support coffee shop operations and help owners control their business",
    "org": "STMIK - STIE Mikroskil",
    "social": {
      "behance": "https://www.behance.net/gallery/128065503/Aplikasi-Pengelolaan-Warung-Kopi",
      "github": "https://github.com/users/gerraour/projects/1",
    }
  },
  {
    "name": "Tropicanatic",
    "image": "/../public/images/notable-work/tropicanatic.png",
    "description": "Premium homemade drink",
    "org": "Other",
    "social": {
      "behance": "https://www.behance.net/gallery/127913899/Tropicanatic-Coffee-Bottle-Label",
      "github": "",
    }
  },
  {
    "name": "Aquahelix Bacteria Booster",
    "org": "PT Satria Nusa Enjinering",
    "image": "/../public/images/notable-work/bacteria-booster.png",
    "description": "Biotechnology for wastewater solution",
    "social": {
      "behance": "https://www.behance.net/gallery/150921109/Aquahelix-Bacter",
      "github": "",
    }
  },
  {
    "name": "Semesta Sakti",
    "image": "/../public/images/notable-work/semesta-sakti.png",
    "description": "Merchandise box",
    "org": "PT Nadic",
    "social": {
      "behance": "https://www.behance.net/gallery/162000763/Semesta-Sakti-Gift-Box",
      "github": "",
    }
  }
]

function NotableWork() {
  return (
    <>
      <div className="container notable-padding" style={{ marginBottom: '150px' }}>
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="fw-semibold">Notable Work</h2>
            <p className="lead">My collection of work I am most proud of—the greatest hits of all time. You will discover some of my most challenging work I have done.</p>
          </div>
          <div className="col-xl-3">
            <Image
              alt="The Blue Peacock"
              src={BluePeacock}
              className="notable-image rounded shadow"
              priority
            />
            <div className="image-link-container image-title-mobile">
						  <a href="https://www.etsy.com/shop/MagicaArtPrints" className="image-link" target="_blank">
							  <p className="m-0">Blue Peacock by <span className="fw-bold">Myla</span></p>
							</a>
						</div>
          </div>
          <div className="col-xl-3 offset-xl-6">
            {notablework.map((item, index) => {
              return (
                <div className="rounded shadow mb-4" key={index}>
                  <Image
                    src={item.image}
                    width={1600}
                    height={800}
                    alt={item.name}
                    className="notable-image-card"
                    priority
                  />
                  <div className="p-4">
                    <h6 className="fw-light text-muted">{item.org}</h6>
                    <h6 className="fw-semibold mb-2">{item.name}</h6>
                    <p>{item.description}</p>
                    {item.social.behance ?
                      <a href={item.social.behance} className="notable-social-link behance me-2">
                        <FontAwesomeIcon icon={faBehanceSquare} />
                      </a> : ""
                    }
                    {item.social.github ?
                      <a href={item.social.github} className="notable-social-link github me-2">
                        <FontAwesomeIcon icon={faGithubSquare} />
                      </a> : ""
                    }
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default NotableWork