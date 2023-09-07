import React, { useState } from "react"
import { subscribeMailchimp } from "../../../utils/api"
import { validateEmail } from "../../../utils/validate"
import "./index.scss"
import { ReactComponent as Moon } from "../../../assets/Moon.svg"
import { ReactComponent as Sun } from "../../../assets/Sun.svg"
import { ReactComponent as Arrow } from "../../../assets/Arrow.svg"
import { SocialButton } from "../../../components/Button/SocialButton"
import {
  SocialButtonInputs,
  SocialButtonProps,
} from "../../../Props/Socials/props"
import { useTheme } from "../../../contexts/ThemeContext/ThemeContext"
import { useNavigate } from "react-router"
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline"

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
  // const [sponsorEmailVisible, setSponsorEmailVisible] = useState<boolean>(false)
  const navigate = useNavigate()
  const isLightClass = () => (theme.mode === "light" ? "--light" : "")

  // const showSponsorEmailCopiedMsg = () => {
  //   setSponsorEmailVisible(true)
  //   setTimeout(() => setSponsorEmailVisible(false), 5000)
  // }
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
            <CalendarDaysIcon />
            February 3-5, 2023
          </div>
          <div className='location'>
            <MapPinIcon />
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

          <div className='landing__container--inputs__row2'>
            <button
              className={`landing__container--inputs__row2--button1${isLightClass()}`}
              onClick={() => navigate("/myPortal")}
            >
              Portal
            </button>
            <button
              className={`landing__container--inputs__row2--button2${isLightClass()}`}
              onClick={() => alert("Applications are not open yet!")}
            >
              Apply
            </button>
          </div>
        </div>
        {/* <div className='MyPortal__container'>
          <button
            // eslint-disable-next-line max-len
            className={`MyPortal`}
            onClick={() => navigate("/redirect")}
          >
            Portal
          </button>
        </div> */}
        {message && (
          <div
            className={
              "landing__container--res" + (state === 3 ? "__error" : "")
            }
          >
            {message}
          </div>
        )}
        {/*<div
          className={`landing__container__email-copied-msg${
            sponsorEmailVisible ? "--visible" : ""
          }`}
        >
          Sponsor Email Copied!
        </div>*/}
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
