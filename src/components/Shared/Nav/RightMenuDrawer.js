import React, { useEffect } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
import { Transition } from "react-transition-group";

import Portal from "../Portal/Portal";
import PublicLoginMenu from "./PublicLoginMenu";
import { useMenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

const RightMenuDrawer = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  const showRightMenu = () => {
    console.log("Animate the menu in.");
  };

  const exitRightMenu = () => {
    console.log("Animate the menu out.");
  };

  return (
    <Portal>
      <Transition
        in={menuState.isOpen}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={500}
        onEnter={showRightMenu}
        onExit={exitRightMenu}
      >
        <RightDrawer>
          <PublicLoginMenu />
        </RightDrawer>
      </Transition>
    </Portal>
  );
};

export default RightMenuDrawer;

const RightDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: ${props => props.theme.mainBackgroundBorderColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 44%;
  height: 100%;
  padding: 20px;
  overflow: hidden;
  z-index: 2;
  ${above.ipadPro`
    width: 50%;
  `}
`;
