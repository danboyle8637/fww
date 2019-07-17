import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";

import MainMenuIcon from "../../../svgs/MainMenuIcon";
import "./Menu.css";
import { useMenuContext } from "../../../context/MenuContext";

const MenuChicklet = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();
  const [screenWidth, setScreenWidth] = useState(0);
  const chickletRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setScreenWidth(screenWidth);
  }, []);

  useEffect(() => {
    if (screenWidth === 1440 && menuState.isOpen) {
      TweenMax.to(chickletRef.current, 0.3, {
        x: 110,
      });
    } else {
      TweenMax.to(chickletRef.current, 0.3, {
        x: 0,
      });
    }

    return () => {
      TweenMax.killTweensOf(chickletRef.current);
    };
  }, [screenWidth, menuState.isOpen]);

  const handleToggleMenu = () => {
    dispatch({ type: "toggleMenu" });
  };

  return (
    <Chicklet ref={chickletRef} onClick={handleToggleMenu}>
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
