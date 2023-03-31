import Image from 'next/image'
import {
  LogoPic
} from './Images'

function HeaderLogo() {
    return (
        <>
          <div className="logo-space">
            <a href="https://www.gerraour.com">
              <Image
                className="logo"
                alt="Gerald Zandisko Logo"
                src={LogoPic}
                priority
              />
            </a>
          </div>
        </>
    )
}

export default HeaderLogo
