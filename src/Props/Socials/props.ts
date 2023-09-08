import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg"
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg"
import { ReactComponent as LinkedIn } from "../../assets/icons/Linkedin.svg"
import { ReactComponent as Twitter } from "../../assets/icons/Twitter.svg"
import { ReactComponent as Discord } from "../../assets/icons/Discord.svg"
import { ReactComponent as Mail } from "../../assets/icons/Mail.svg"

export interface SocialButtonProps {
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  link: string
}

export const SocialButtonInputs: Array<SocialButtonProps> = [
  {
    logo: Instagram,
    link: "https://www.instagram.com/cruzhacks/",
  },
  {
    logo: Facebook,
    link: "https://www.facebook.com/CruzHacks/",
  },
  {
    logo: LinkedIn,
    link: "https://www.linkedin.com/company/cruzhacks/",
  },
  {
    logo: Twitter,
    link: "https://twitter.com/CruzHacks",
  },

  { logo: Mail, link: "mailto:contact@cruzhacks.com" },
  {
    logo: Discord,
    link: "https://discord.gg/NBUHWbmaeb",
  },
]
