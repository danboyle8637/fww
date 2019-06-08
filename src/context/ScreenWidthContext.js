import React, { createContext, useState, useEffect } from "react"

import { sizes } from "../styles/Theme"
import { getRems } from "../utils/helpers"

const ScreenWidthContext = createContext()

const ScreenWidthStore = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState("")

  useEffect(() => {
    const width = getRems(window.innerWidth)
    const { mobile, tablet, laptop } = sizes

    if (width < mobile) {
      setScreenWidth("mobile")
    }

    if (width > mobile && width < laptop) {
      setScreenWidth("tablet")
    }

    if (width > tablet) {
      setScreenWidth("laptop")
    }
  }, [])

  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      {children}
    </ScreenWidthContext.Provider>
  )
}

export { ScreenWidthStore, ScreenWidthContext as default }
