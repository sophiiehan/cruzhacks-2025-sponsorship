import React from "react"
import HeroBlurb from "./HeroBlurb/index.view"
import FAQs from "./FAQs/index.view"
import Landing from "./Landing/index.view"
import Sponsors from "./Sponsors/index.view"
import PreviousHackathons from "./PreviousHackathons/index.view"
import { PreviousHackathonProps } from "../../Props/PreviousHackathonProps/props"
import SupportSection from "./SupportSection/index.view"

import "./index.scss"

const Home: React.FC = () => (
  <>
    <Landing />
    <div className='home__container'>
      <HeroBlurb />
      <SupportSection />
      <Sponsors />
      <PreviousHackathons hackathons={PreviousHackathonProps} />
      <FAQs />
    </div>
  </>
)

export default Home
