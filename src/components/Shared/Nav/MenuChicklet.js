import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { TweenMax, Power2 } from "gsap/TweenMax";

import MainMenuIcon from "../../../svgs/MainMenuIcon";
import RightMenuDrawer from "./RightMenuDrawer";
import LeftMenuDrawer from "./LeftMenuDrawer";
import Portal from "../Portal/Portal";
import "./Menu.css";
import { useMenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

const MenuChicklet = () => {
  // eslint-disable-next-line
  const [menuState, dispatchMenuAction] = useMenuContext();
  const menuChickletRef = useRef(null);

  // useEffect(() => {
  //   const menuChicklet = menuChickletRef.current;

  //   if (menuState.isOpen) {
  //     TweenMax.to(menuChicklet, 0.5, { x: -60 });
  //   } else {
  //     TweenMax.to(menuChicklet, 0.5, { x: 0 });
  //   }
  // }, [menuChickletRef, menuState.isOpen]);

  const handleToggleMenu = () => {
    dispatchMenuAction({ type: "toggleMenu" });
  };

  return (
    <>
      <Chicklet ref={menuChickletRef} onClick={handleToggleMenu}>
        <MenuIcon />
      </Chicklet>
      <Portal>
        <RightMenuDrawer />
        <LeftMenuDrawer />
      </Portal>
    </>
  );
};

export default MenuChicklet;

const Chicklet = styled.div`
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

const MenuIcon = styled(MainMenuIcon)`
  margin: 0;
  padding: 0;
  width: 40px;
  ${above.mobile`
    width: 50px;
  `}
`;
