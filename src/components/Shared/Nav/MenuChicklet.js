import React, { useRef } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";

import MainMenuIcon from "../../../svgs/MainMenuIcon";
import RightMenuDrawer from "./RightMenuDrawer";
import LeftMenuDrawer from "./LeftMenuDrawer";
import MenuMarkerBorder from "./MenuMarkerBorder";
import "./Menu.css";
import { useMenuContext } from "../../../context/MenuContext";

const MenuChicklet = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();
  const chickletRef = useRef(null);

  const handleToggleMenu = () => {
    dispatch({ type: "toggleMenu" });
  };

  return (
    <Chicklet ref={chickletRef} onClick={handleToggleMenu}>
      <MenuIcon />
      <RightMenuDrawer />
      <LeftMenuDrawer />
      <MenuMarkerBorder />
    </Chicklet>
  );
};

export default MenuChicklet;

const Chicklet = styled.div`
  margin-top: 5px;
  background: transparent;
`;

const MenuIcon = styled(MainMenuIcon)`
  width: 40px;
`;
