import React from "react";
import styled from "styled-components";

import MainMenuIcon from "../../../svgs/MainMenuIcon";
import RightMenuDrawer from "./RightMenuDrawer";
import LeftMenuDrawer from "./LeftMenuDrawer";
import MenuMarkerBorder from "./MenuMarkerBorder";
import Portal from "../Portal/Portal";
import "./Menu.css";
import { useMenuContext } from "../../../context/MenuContext";

const MenuChicklet = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  const handleToggleMenu = () => {
    dispatch({ type: "toggleMenu" });
  };

  return (
    <>
      <Chicklet onClick={handleToggleMenu}>
        <MenuIcon />
      </Chicklet>
      <Portal>
        <RightMenuDrawer />
        <LeftMenuDrawer />
        <MenuMarkerBorder />
      </Portal>
    </>
  );
};

export default MenuChicklet;

const Chicklet = styled.div`
  background: transparent;
`;

const MenuIcon = styled(MainMenuIcon)`
  width: 40px;
`;
