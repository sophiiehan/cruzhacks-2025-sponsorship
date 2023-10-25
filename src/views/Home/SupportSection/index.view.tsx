import React from "react"
import { ReactComponent as Instagram } from "../../../assets/icons/Instagram.svg"
import { ReactComponent as Facebook } from "../../../assets/icons/Facebook.svg"
import { ReactComponent as LinkedIn } from "../../../assets/icons/LinkedIn.svg"
import { ReactComponent as Twitter } from "../../../assets/icons/Twitter.svg"
import { ReactComponent as Discord } from "../../../assets/icons/Discord.svg"
import "./index.scss"
import { SocialButton } from "../../../components/Button/SocialButton"

const SupportSection: React.FC = () => (
  <div className='SupportSection__container'>
    {/* support us! */}
    <div className='SupportSection__container--SupportContainer'>
      <div className='SupportSection__container--SupportContainer--title'>
        SUPPORT US!
      </div>
      <div className='SupportSection__container--SupportContainer--icons'>
        <SocialButton
          logo={Instagram}
          link={"https://www.instagram.com/cruzhacks/"}
          key={"https://www.instagram.com/cruzhacks/"}
        />
        <SocialButton
          logo={Facebook}
          link={"https://www.facebook.com/CruzHacks/"}
          key={"https://www.facebook.com/CruzHacks/"}
        />
        <SocialButton
          logo={LinkedIn}
          link={"https://www.linkedin.com/company/cruzhacks/"}
          key={"https://www.linkedin.com/company/cruzhacks/"}
        />
        <SocialButton
          logo={Twitter}
          link={"https://twitter.com/CruzHacks"}
          key={"https://twitter.com/CruzHacks"}
        />
        <SocialButton
          logo={Discord}
          link={"https://discord.gg/NBUHWbmaeb"}
          key={"https://discord.gg/NBUHWbmaeb"}
        />
      </div>
    </div>

    {/* sponsor us! */}
    <div className='SupportSection__container--SponsorContainer'>
      <div className='SupportSection__container--SponsorContainer--title'>
        SPONSOR US!
      </div>
      <div className='SupportSection__container--SponsorContainer--blurb'>
        Interested in sponsoring CruzHacks for our upcoming hackathon? Connect
        with our Sponsorshop Team for more information on how supporting
        CruzHacks will benefit you!
      </div>
      <div className='SupportSection__container--SponsorContainer--button'>
        <button
          type='button'
          className='ConnectButton'
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSeS9OmogTXhPD5yOoYAYuKbrBeseHIj3ePQIYbcLQy2lLUBaA/viewform?usp=sf_link",
              "_blank",
            )
          }
        >
          Connect here
        </button>
      </div>
    </div>
  </div>
)

export default SupportSection
