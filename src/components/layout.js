import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import Global from "../styles/Global";
import { above, darkTheme } from "../styles/Theme";
import { ScreenWidthStore } from "../context/ScreenWidthContext";
import Header from "./header";
import FooterSection from "../components/Website/Footer/FooterSection";

const Layout = ({ children, isBlogPage, isApp }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ScreenWidthStore>
        <Global />
        <Header />
        <Main isBlog={isBlogPage} isApp={isApp}>
          {children}
        </Main>
        <FooterSection />
      </ScreenWidthStore>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Main = styled.main`
  background-color: ${props =>
    props.isBlog
      ? props.theme.baseBackgroundColor
      : props.theme.mainBackgroundColor};
  width: 100%;
  max-width: ${props =>
    props.isBlog ? "980px" : props.isApp ? "1200px" : "1440px"};
  overflow: hidden;
  ${above.tablet`
    margin-bottom: ${props => (props.isBlog ? "80px" : "0")};
    max-width: ${props =>
      props.isBlog ? "900px" : props.isApp ? "1200px" : "1440px"};
  `}
  ${above.ipadPro`
    margin-bottom: ${props => (props.isBlog ? "80px" : "0")};
    max-width: ${props =>
      props.isBlog ? "800px" : props.isApp ? "1200px" : "1440px"};
  `}
  ${above.laptop`
    max-width: ${props =>
      props.isBlog ? "980px" : props.isApp ? "1200px" : "1440px"};
  `}
  ${above.ultraWide`
    margin-bottom: 80px;
    border: 21px solid ${props =>
      props.isBlog ? "none" : props.theme.mainBackgroundBorderColor};
    border-radius: 14px;
  `}
`;
