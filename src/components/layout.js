import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import Global from "../styles/Global"
import { above, darkTheme } from "../styles/Theme"
import { ScreenWidthStore } from "../context/ScreenWidthContext"
import Header from "./header"
import FooterSection from "../components/Website/Footer/FooterSection"

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={darkTheme}>
      <ScreenWidthStore>
        <Global />
        <Header />
        <Main>{children}</Main>
        <FooterSection />
      </ScreenWidthStore>
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
  border-radius: 6px;
  ${above.ultraWide`
    margin-bottom: 80px;
    border: 21px solid ${props => props.theme.mainBackgroundBorderColor};
    border-radius: 6px;
  `}
`
