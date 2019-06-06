import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import Global from "../styles/Global"
import { above, darkTheme } from "../styles/Theme"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={darkTheme}>
      <>
        <Global />
        <Header />
        <Main>{children}</Main>
        <footer>© {new Date().getFullYear()}, Built with</footer>
      </>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  width: 100%;
  max-width: 1440px;
  background-color: ${props => props.theme.mainBackgroundColor};
  ${above.laptop`
    border: 21px solid ${props => props.theme.mainBackgroundBorderColor};
    border-radius: 6px;
  `}
`
