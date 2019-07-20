import React from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";

import DividerMenuMarker from "../../../svgs/DividerMenuMarker";
import { useMenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

const MenuMarkerBorder = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  return (
    <Transition
      in={menuState.isOpen}
      mountOnEnter={true}
      unmountOnExit={true}
      timeout={500}
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
