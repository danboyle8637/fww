import React from "react";
import styled from "styled-components";

import MainMenuIcon from "../../../svgs/MainMenuIcon";
import "./Menu.css";
import { useMenuContext } from "../../../context/MenuContext";

const MenuChicklet = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  const handleToggleMenu = () => {
    dispatch({ type: "toggleMenu" });
  };

  return (
    <Chicklet onClick={handleToggleMenu}>
      <MenuIcon />
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
