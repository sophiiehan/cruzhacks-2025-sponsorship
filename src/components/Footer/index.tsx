import React from "react"
import { useTheme } from "../../contexts/ThemeContext/ThemeContext"
import {
  SocialButtonInputs,
  SocialButtonProps,
} from "../../Props/Socials/props"
import { ReactComponent as LandDark } from "../../assets/LandDark.svg"
import { ReactComponent as LandLight } from "../../assets/LandLight.svg"
import { SocialButton } from "../Button/SocialButton"

import "./index.scss"

const Footer: React.FC = () => {
  const { theme } = useTheme()

  const Illustration = theme.mode === "dark" ? LandDark : LandLight

  const whiteLogoImg = new URL("./logo_2022-white.svg", import.meta.url)

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
              <img src={whiteLogoImg.origin} alt='CruzHacks 2022 Site' />
            </a>

            {SocialButtonInputs.map(({ logo, link }: SocialButtonProps) => (
              <SocialButton logo={logo} link={link} key={link} />
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
