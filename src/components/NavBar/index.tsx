import React, { useEffect, useState } from "react"
import { useTheme } from "../../contexts/ThemeContext/ThemeContext"
import { Link, useLocation } from "react-router-dom"
import ThemeSlider from "./ThemeSlider"
import { ReactComponent as CruzHacksLogo } from "../../assets/CruzHacksLogo.svg"
import { ReactComponent as MLHTrustBadge2023 } from "../../assets/mlhtrust.svg"

import "./index.scss"
import DropdownButton from "./DropdownButton"

const NavBar: React.FC = () => {
  const [navHidden, setNavHidden] = useState(true)
  const { theme, forceTheme, revertTheme } = useTheme()
  const [portalView, setPortalView] = useState(false)

  const page = useLocation().pathname
  const re = new RegExp("portal", "g")
  const [windowWidthHeight, setWidthHeight] = useState<number[]>([501, 500])

  useEffect(() => {
    setWidthHeight([window.innerWidth, window.innerHeight])
  }, [])
  useEffect(() => {
    function handleResize() {
      setWidthHeight([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const route = page.match(re)
  useEffect(() => {
    if (route && route[0] === "portal") {
      if (theme.mode !== "portal") forceTheme()
      if (!portalView) setPortalView(true)
    } else {
      if (theme.mode === "portal") revertTheme()
      if (portalView) setPortalView(false)
    }
  }, [page])

  const nav = (
    <>
      <Link
        className={
          "nav__container--right--item " + (page == "/" ? "active" : "")
        }
        to='/'
      >
        <span className='nav__container--right--item__link'>Home</span>
      </Link>
      <Link
        className={
          "nav__container--right--item " + (page == "/team" ? "active" : "")
        }
        to='/team'
      >
        <span className='nav__container--right--item__link'>About Us</span>
      </Link>
    </>
  )

  // TODO: https://codepen.io/tonkec/pen/XXgdoo?editors=1100
  const dropDown = (
    <>
      <DropdownButton
        onClick={() => setNavHidden(!navHidden)}
        checked={!navHidden}
      ></DropdownButton>
      <div
        className={
          "nav__container--right__dropdown " + (navHidden ? "hidden" : "")
        }
      >
        {nav}
      </div>
    </>
  )

  return (
    <nav className='nav'>
      <div className='nav__container'>
        <div className='nav__container--left'>
          <Link to='/'>
            <CruzHacksLogo className='logo' />
          </Link>
          <ThemeSlider />
        </div>
        <div className='nav__container--right'>
          {windowWidthHeight[0] <= 850 ? dropDown : nav}
        </div>
        {navHidden && (
          <div className='badge_container'>
            <MLHTrustBadge2023 className='mlh_badge' />
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
