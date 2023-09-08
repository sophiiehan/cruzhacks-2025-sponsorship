import React from "react"
import { ReactComponent as Moon } from "../../../assets/decorative/Moon.svg"
import { ReactComponent as Sun } from "../../../assets/decorative/Sun.svg"
import { SocialButton } from "../../../components/Button/SocialButton"
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline"
import {
  SocialButtonInputs,
  SocialButtonProps,
} from "../../../Props/Socials/props"
import { useTheme } from "../../../contexts/ThemeContext/ThemeContext"

import "./index.scss"

const Landing: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className='landing'>
      <div className='landing__badge'>
        <div className='landing__badge--icon'>
          {theme.mode === "light" ? (
            <Sun className='landing__badge--icon__sun' />
          ) : (
            <Moon className='landing__badge--icon__moon' />
          )}
          <div className='landing__badge--icon__socials'>
            {SocialButtonInputs.map(({ logo, link }: SocialButtonProps) => (
              <SocialButton logo={logo} link={link} key={link} />
            ))}
          </div>
        </div>
      </div>
      <div className='landing__container'>
        <div className='landing__container--title'>CRUZHACKS 2023</div>
        <div className='landing__container--blurb'>
          CruzHacks is the largest hackathon in Santa Cruz. Each year, we invite
          hundreds of students to develop solutions to real-world problems,
          pursue inclusion in tech, and kindle the spirit of innovation.
        </div>
        <div className='more-info'>
          <div className='date'>
            <CalendarDaysIcon className='date-icon' />
            February 3-5, 2023
          </div>
          <div className='location'>
            <MapPinIcon className='location-icon' />
            Stevenson Event Center @ UC Santa Cruz
          </div>
        </div>
        <div className='landing__container--inputs'></div>
      </div>

      <div className='landing__socials-mobile'>
        {SocialButtonInputs.map(({ logo, link }: SocialButtonProps) => (
          <SocialButton logo={logo} link={link} key={link} />
        ))}
      </div>
    </div>
  )
}

export default Landing
