import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import {
  navContainer,
  navContainerBtn,
  navHidden,
  navVisible,
} from './navigation.module.css'

let PageList = {
  "": "Home",
  "page1": "Page 1",
  "page2": "Page 2",
  "page3": "Page 3",
}

let NavList = () => {
  return (
    <ul>
    {Object.entries(PageList).map(([key,value])=>{ return (
      <li key={value.toLowerCase()}>
        <Link to={`/${key}`}>
          {value}
        </Link>
      </li>
    )})}
    </ul>    
  )
}

const isBrowser = () => {
  return (typeof window !== "undefined")
}

let Navigation = () => {
  let widescreenMediaQuery = isBrowser() && window.matchMedia("(min-width: 900px)")

  // TODO: initial state isn't correct in all situations
  let [navState, setNavState] = useState(!widescreenMediaQuery.matches ? navHidden : navVisible)

  console.log("initial = " + navState)

  useEffect(() => {
    let listener = (widescreenMediaQuery) => {
      if (widescreenMediaQuery.matches) {
        console.log("media query -> visible")
        setNavState(navVisible)
      } else {
        console.log("media query -> hidden")
        setNavState(navHidden)
      }
    }
    widescreenMediaQuery.addEventListener("change", listener)
    return () => widescreenMediaQuery.removeEventListener("change", listener)
  }, [widescreenMediaQuery])

  let toggleMenu = () => {
    if (navState === navVisible) {
      console.log("toggle to hidden")
      setNavState(navHidden)
    }
    if (navState === navHidden) {
      console.log("toggle to visible")
      setNavState(navVisible)
    }
  }

  console.log("final = " + navState)

  return (
    <>
      <button className={navContainerBtn} aria-label="Toggle Navigation Menu" onClick={toggleMenu} />

      <nav className={[navContainer,navState].join(" ")}>
        <NavList />
      </nav>
    </>
  )
}

export default Navigation
