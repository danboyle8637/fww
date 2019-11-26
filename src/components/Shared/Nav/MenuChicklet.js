import React from "react";
import styled from "styled-components";

import MainMenuIcon from "../../../svgs/MainMenuIcon";
import RightMenuDrawer from "./RightMenuDrawer";
import LeftMenuDrawer from "./LeftMenuDrawer";
import MenuMarkerBorder from "./MenuMarkerBorder";
import Portal from "../Portal/Portal";
import "./Menu.css";
import { useMenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

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
