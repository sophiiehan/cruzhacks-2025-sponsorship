import React from "react"
import { useTheme } from "../../contexts/ThemeContext/ThemeContext"
import { ReactComponent as LandDark } from "../../assets/decorative/LandDark.svg"
import { ReactComponent as LandLight } from "../../assets/decorative/LandLight.svg"

import { ReactComponent as Logo2022 } from "../../assets/icons/2022.svg"
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg"
import { ReactComponent as Twitter } from "../../assets/icons/Twitter.svg"
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg"
import { ReactComponent as LinkedIn } from "../../assets/icons/LinkedIn.svg"
import { ReactComponent as Mail } from "../../assets/icons/Mail.svg"

import "./index.scss"

const Footer: React.FC = () => {
  const { theme } = useTheme()

  const Illustration = theme.mode === "dark" ? LandDark : LandLight

  return (
    <>
      <Illustration className='footer__image' />
      <footer className='footer' id='footer'>
        <div className='footer__container'>
          <div className='footer__container--left'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:contact@cruzhacks.com'
            >
              Contact Us
            </a>
            <span className='footer__container--left--divider'></span>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
            >
              Code of Conduct
            </a>
            <span className='footer__container--left--divider'></span>
            <a
              target='_blank'
              href='https://docs.google.com/document/d/1298VyEqrSIvbzM3U8nvLQsLtY78Vi2mbndr3d5w0UKk/edit?usp=sharing'
              rel='noopener noreferrer'
            >
              Participant Agreement
            </a>
          </div>
          <div className='footer__container--right'>
            <div className='footer__copyright'>CRUZHACKS © 2023</div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://2022.cruzhacks.com/'
              className='footer__container--right--socials'
            >
              <Logo2022 />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/cruzhacks/?hl=en'
              className='footer__container--right--socials'
            >
              <Instagram />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/CruzHacks/'
              className='footer__container--right--socials'
            >
              <Facebook />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/company/cruzhacks'
              className='footer__container--right--socials'
            >
              <LinkedIn />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:contact@cruzhacks.com'
              className='footer__container--right--socials'
            >
              <Mail />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/CruzHacks'
              className='footer__container--right--socials'
            >
              <Twitter />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
