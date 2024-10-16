import React from "react"
import { SponsorsIconsLinks } from "../../../Props/Sponsors/props"
import "./index.scss"

const Sponsors: React.FC = () => (
  <div className='sponsors'>
    <h2>Thanks to our Sponsors!</h2>
    <div className='sponsors--icons'>
      {SponsorsIconsLinks.map((tier, index) => (
        <div key={`row-${index}`} className={`sponsors--icons__row row${index + 1}`}>
          {tier.map(item => (
            <a
              className='sponsor-anchors'
              key={item.link}
              href={item.link}
              target='_blank'
              referrerPolicy='no-referrer'
              title={item.alt}
              rel='noreferrer'
            >
              {React.createElement(item.icon, {
                className: `sponsorIcon tier${index + 1} ${item.alt}`,
              })}
            </a>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export default Sponsors
