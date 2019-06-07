import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import Global from "../styles/Global"
import { above, darkTheme } from "../styles/Theme"
import { ScreenWidthStore } from "../context/ScreenWidthContext"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={darkTheme}>
      <ScreenWidthStore>
        <Global />
        <Header />
        <Main>{children}</Main>
        <footer>© {new Date().getFullYear()}, Built with</footer>
      </ScreenWidthStore>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  margin-top: 69px;
  width: 100%;
  max-width: 1440px;
  background-color: ${props => props.theme.mainBackgroundColor};
  ${above.mobile`
    margin-top: 74px;
  `}
  ${above.tablet`
    margin-top: 78px;
  `}
  ${above.laptop`
    border: 21px solid ${props => props.theme.mainBackgroundBorderColor};
    border-radius: 6px;
  `}
`
