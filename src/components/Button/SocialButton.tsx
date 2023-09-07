import React from "react"
import { SocialButtonProps } from "../../Props/Socials/props"
import "./SocialButton.scss"

export const SocialButton: React.FC<SocialButtonProps> = props => {
  return (
    <button
      className='Button'
      onClick={() => {
        window.open(props.link)
      }}
    >
      <props.logo className='Button--svg' />
    </button>
  )
}
