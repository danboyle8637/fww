import React from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/TweenMax";
import { Transition } from "react-transition-group";

import DividerMenuMarker from "../../../svgs/DividerMenuMarker";
import { useMenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

const MenuMarkerBorder = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  const showBorder = (node, isAppearing) => {
    TweenMax.fromTo(
      node,
      0.5,
      {
        x: "-200%",
      },
      {
        x: "0%",
      }
    );
  };

  const exitBorder = node => {
    TweenMax.to(node, 0.5, {
      x: "-200%",
    });
  };

  return (
    <Transition
      in={menuState.isOpen}
      mountOnEnter={true}
      unmountOnExit={true}
      timeout={500}
      onEnter={(node, isAppearing) => {
        showBorder(node, isAppearing);
      }}
      onExit={node => exitBorder(node)}
    >
      <MenuRightBorder />
    </Transition>
  );
};

export default MenuMarkerBorder;

const MenuRightBorder = styled(DividerMenuMarker)`
  position: fixed;
  top: 0;
  left: 50%;
  height: 100%;
  z-index: 6;
  ${above.ipadPro`
    left: 50%;
  `}
`;
