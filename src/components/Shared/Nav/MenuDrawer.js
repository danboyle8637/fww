import React, { useEffect } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
import { Transition } from "react-transition-group";

import Portal from "../Portal/Portal";
import PublicMenuList from "./PublicMenuList";
import { useMenuContext } from "../../../context/MenuContext";
import MenuDrawerAni from "../../../Animations/Nav/MenuDrawerAni";

const MenuDrawer = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  return (
    <Portal>
      <MenuDrawerAni>
        <Drawer width={menuState.xPercent}>
          <PublicMenuList />
        </Drawer>
      </MenuDrawerAni>
    </Portal>
  );
};

export default MenuDrawer;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => `${props.width}%`};
  height: 100%;
  padding: 20px;
  overflow: hidden;
  z-index: 2;
`;
