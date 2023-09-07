import React from "react"
import { SocialButtonProps } from "../../Props/Socials/props"
import "./SocialButton.scss"

export const SocialButton: React.FC<SocialButtonProps> = props => {
  return (
    <button
      className='social_button'
      onClick={() => {
        window.open(props.link)
      }}
    >
      <props.logo className='social_button--svg' />
    </button>
  )
}
