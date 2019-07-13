import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap";

import Global from "../styles/Global";
import { above, darkTheme } from "../styles/Theme";
import { ScreenWidthStore } from "../context/ScreenWidthContext";
import Header from "./header";
import FooterSection from "../components/Website/Footer/FooterSection";
import { useMenuContext } from "../context/MenuContext";

const Layout = ({ children, isBlogPage, isApp }) => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();
  const viewRef = useRef(null);

  useEffect(() => {
    console.log(menuState.isOpen);
  }, [menuState.isOpen]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ScreenWidthStore>
          <Global />
          <Header />
          <Main isBlog={isBlogPage} isApp={isApp}>
            <Transition
              in={menuState.isOpen}
              addEndListener={(node, done) => {
                if (menuState.isOpen) {
                  TweenMax.to(node, 0.5, {
                    x: -60,
                    onComplete: done,
                  });
                } else {
                  TweenMax.to(node, 0.5, {
                    x: 0,
                    onComplete: done,
                  });
                }
              }}
            >
              <TransitionWrapper>
                <View ref={viewRef}>{children}</View>
                <FooterSection />
              </TransitionWrapper>
            </Transition>
          </Main>
        </ScreenWidthStore>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: ${props =>
    props.isBlog
      ? props.theme.baseBackgroundColor
      : props.theme.mainBackgroundColor};
  width: 100%;
  max-width: ${props =>
    props.isBlog ? "980px" : props.isApp ? "1200px" : "1440px"};
  overflow: hidden;
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
    border-radius: 6px;
  `}
`;

const View = styled.div`
  width: 100%;
  box-shadow: 4px 0 8px 2px rgba(0, 0, 0, 0.3);
  ${above.ultraWide`
    border-radius: 6px;
  `}
`;

const TransitionWrapper = styled.div`
  width: 100%;
`;
