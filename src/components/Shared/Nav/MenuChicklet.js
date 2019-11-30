import React, { useRef } from "react";
import styled from "styled-components";

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
  grid-column: 3;
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
