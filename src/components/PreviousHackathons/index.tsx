import React from "react"

import "./PreviousHackathons.scss"

export interface PreviousHackathonData {
  name: string
  link: string
}

const PreviousHackathon = (props: {
  style?: React.CSSProperties
  data: PreviousHackathonData
}) => {
  // Regular expression to match a year (YYYY) in the string
  const yearRegex = /\b\d{4}\b/

  // Search for the year in props.data.name
  const match = props.data.name.match(yearRegex)

  // Extract the year if a match is found
  const year = match ? match[0] : "Year not found"

  return (
    <div style={props.style || {}} className='speaker-card'>
      <div className='speaker-card__info'>
        <div className='speaker-card__info__name'>{props.data.name}</div>
        {/* Wrap the link in an anchor tag */}
        <a href={props.data.link} className='speaker-card__info__title'>
          VISIT WEBSITE | WINTER {year}
        </a>
        {/* <div className='speaker-card__info__blurb'>{props.data.blurb}</div> */}
      </div>
    </div>
  )
}

export default PreviousHackathon
