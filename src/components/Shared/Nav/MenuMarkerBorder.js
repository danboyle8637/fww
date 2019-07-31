import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/TweenMax";
import { Transition } from "react-transition-group";

import DividerMenuMarker from "../../../svgs/DividerMenuMarker";
import { useMenuContext } from "../../../context/MenuContext";
import ScreenWidthContext from "../../../context/ScreenWidthContext";
import { above } from "../../../styles/Theme";

const MenuMarkerBorder = () => {
  const device = useContext(ScreenWidthContext);
  const [x, setX] = useState(0);
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  useEffect(() => {
    if (device === "mobile") {
      setX(200);
    }

    if (device === "tablet") {
      setX(300);
    }

    if (device === "ipadPro") {
      setX(300);
    }

    if (device === "laptop") {
      setX(560);
    }

    if (device === "ultraWide") {
      setX(580);
    }
  }, [device]);

  const showBorder = (node, isAppearing) => {
    TweenMax.fromTo(
      node,
      0.5,
      {
        x: `-${x}%`,
      },
      {
        x: "0%",
      }
    );
  };

  const exitBorder = node => {
    TweenMax.to(node, 0.5, {
      x: `-${x}%`,
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
  z-index: 1002;
  ${above.mobile`
    left: 54%;
  `}
  ${above.ipadPro`
    left: 50%;
  `}
`;
