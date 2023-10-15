import React, { useState } from "react"
import { nanoid } from "nanoid"

import "./index.scss"
import PreviousHackathon from "../../../components/PreviousHackathons"

import { PreviousHackathonData } from "../../../Props/PreviousHackathonProps/props" // Adjust the import path as needed

interface PreviousHackathonsProps {
  hackathons: PreviousHackathonData[]
}

const PreviousHackathons: React.FC<PreviousHackathonsProps> = ({
  hackathons,
}) => {
  const [page, setPage] = useState<number>(0)

  return (
    <div className='speakers'>
      <div className='speakers__container'>
        <div className='speakers__container__header'>PREVIOUS HACKATHONS</div>
        <div className='speakers__container__cards'>
          {hackathons.map(data => (
            <PreviousHackathon
              key={nanoid()}
              data={data}
              style={{
                transform: `translateX(calc(-${page * 100}% - ${page * 40}px))`,
              }}
            />
          ))}
          <button
            className='speakers__container__left-button'
            onClick={() => {
              page > 0 ? setPage(page - 1) : setPage(0)
            }}
          ></button>
          <button
            className='speakers__container__right-button'
            onClick={() => {
              page < hackathons.length - 1
                ? setPage(page + 1)
                : setPage(hackathons.length - 1)
            }}
          ></button>
        </div>
        <div className=''></div>
      </div>
    </div>
  )
}

export default PreviousHackathons
