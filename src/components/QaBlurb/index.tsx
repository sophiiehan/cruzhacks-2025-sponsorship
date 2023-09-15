import React, { useState } from "react"
import "./index.scss"

const greenStarUrl = new URL("./icon_star-green.svg", import.meta.url)

export interface QaBlurbProps {
  question: string
  children: React.ReactNode
}

const QaBlurb: React.FC<QaBlurbProps> = (props: QaBlurbProps) => {
  const { question, children } = props

  const [open, setOpen] = useState(false)

  return (
    <div
      className='qablurb__container'
      onClick={() => setOpen(!open)}
      onKeyDown={() => setOpen(!open)}
      role='presentation'
    >
      <img
        className='qablurb__container--star'
        src={greenStarUrl.origin}
        alt='Click to reveal answer.'
      />
      <div className='qablurb__container--QA'>
        <div className='qablurb__container--QA--question'>
          <h3>{question}</h3>
          <button className={open ? "open" : ""}>
            <span></span>
            <span></span>
          </button>
        </div>
        <p className={open ? "" : "closed"}>{children}</p>
      </div>
    </div>
  )
}

export default QaBlurb
