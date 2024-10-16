import React from "react"
import HeroBlurb from "./HeroBlurb/index.view"
import FAQs from "./FAQs/index.view"
import Landing from "./Landing/index.view"
import Sponsors from "./Sponsors/index.view"
import PreviousHackathons from "./PreviousHackathons/index.view"
import { PreviousHackathonProps } from "../../Props/PreviousHackathonProps/props"
import SupportSection from "./SupportSection/index.view"
import About from "../Team/About/index.view"
import Members from "../Team/Members/index.view"

import "./index.scss"

const Home: React.FC = () => (
  <>
    <Landing />
    <div className='home__container'>
      <HeroBlurb />
      <About />
      <Members />
      <SupportSection />
      <Sponsors />
      <PreviousHackathons hackathons={PreviousHackathonProps} />
      <FAQs />
    </div>
  </>
)

export default Home
