import React, { useEffect } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/TweenMax";
import { Transition } from "react-transition-group";

import Portal from "../Portal/Portal";
import PublicNavMenu from "./PublicNavMenu";
import { useMenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

const LeftMenuDrawer = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  const showLeftMenu = (node, isAppearing) => {
    TweenMax.fromTo(
      node,
      0.5,
      {
        x: "-100%",
      },
      {
        x: "0%",
      }
    );
  };

  const exitLeftMenu = node => {
    TweenMax.to(node, 0.5, {
      x: "-100%",
    });
  };

  return (
    <Portal>
      <Transition
        in={menuState.isOpen}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={500}
        onEnter={(node, isAppearing) => {
          showLeftMenu(node, isAppearing);
        }}
        onExit={node => exitLeftMenu(node)}
      >
        <LeftDrawer>
          <PublicNavMenu />
        </LeftDrawer>
      </Transition>
    </Portal>
  );
};

export default LeftMenuDrawer;

const LeftDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.mainBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 54%;
  height: 100vh;
  padding: 20px;
  overflow: hidden;
  z-index: 3;
  ${above.ipadPro`
    width: 50%;
  `}
`;
