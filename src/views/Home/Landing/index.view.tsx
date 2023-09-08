import React, { useState } from "react"
import { subscribeMailchimp } from "../../../utils/api"
import { validateEmail } from "../../../utils/validate"
import { ReactComponent as Moon } from "../../../assets/decorative/Moon.svg"
import { ReactComponent as Sun } from "../../../assets/decorative/Sun.svg"
import { ReactComponent as Arrow } from "../../../assets/icons/Arrow.svg"
import { SocialButton } from "../../../components/Button/SocialButton"
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline"
import {
  SocialButtonInputs,
  SocialButtonProps,
} from "../../../Props/Socials/props"
import { useTheme } from "../../../contexts/ThemeContext/ThemeContext"

import "./index.scss"

const SubmissionStates = {
  NotSubmitted: 0,
  Loading: 1,
  Submitted: 2,
  Errored: 3,
}

const Landing: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [state, setState] = useState<number>(0)
  const [message, setMessage] = useState<string>("")
  const { theme } = useTheme()

  const isLightClass = () => (theme.mode === "light" ? "--light" : "")

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setState(SubmissionStates.Errored)
      setMessage("Please enter a valid email address.")
      return
    }
    setState(SubmissionStates.Loading)
    setMessage("Submitting...")
    subscribeMailchimp(email).then(res => {
      if (res.status === 200 || res.status === 201) {
        setState(SubmissionStates.Submitted)
        setMessage(res.data.message)
      } else {
        setState(SubmissionStates.Errored)
        setMessage(
          "Oh no! We've got an error— please try your request again & contact" +
            " us at dev@cruzhacks.com if this persists!",
        )
      }
    })
  }

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
        <div className='landing__container--inputs'>
          <div className='landing__container--inputs__row-container'>
            <div className='landing__container--inputs__row-container__row1'>
              <input
                className='landing__container--inputs__row-container__row1--email-input'
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter email for updates'
              ></input>
              <div
                className={`landing__container--inputs__row-container__row1__arrow-container`}
              >
                <button
                  className={`landing__container--inputs__row-container__row1__arrow-container--arrow${isLightClass()}`}
                  onClick={() => handleSubmit()}
                >
                  <Arrow className='arrow-icon' />
                </button>
              </div>
            </div>
          </div>
        </div>
        {message && (
          <div
            className={
              "landing__container--res" + (state === 3 ? "__error" : "")
            }
          >
            {message}
          </div>
        )}
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
