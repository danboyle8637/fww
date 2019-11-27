import React from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/TweenMax";
import { Transition } from "react-transition-group";

import PublicNavMenu from "./PublicNavMenu";
import { useMenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

const LeftMenuDrawer = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  const showLeftMenu = node => {
    TweenMax.fromTo(
      node,
      0.3,
      {
        x: "-100%",
      },
      {
        x: "0%",
      }
    );
  };

  const exitLeftMenu = node => {
    TweenMax.to(node, 0.3, {
      x: "-100%",
    });
  };

  return (
    <Transition
      in={menuState.isOpen}
      mountOnEnter={true}
      unmountOnExit={true}
      timeout={500}
      onEnter={(node, isAppearing) => {
        showLeftMenu(node, isAppearing);
      }}
      onExit={node => exitLeftMenu(node)}
    >
      <LeftDrawer>
        <PublicNavMenu />
      </LeftDrawer>
    </Transition>
  );
};

export default LeftMenuDrawer;

const LeftDrawer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.mainBackgroundColor};
  border-right: 8px solid rgba(180, 76, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 54%;
  padding: 20px;
  overflow: hidden;
  z-index: 1009;
  ${above.mobile`
    padding: 0 0 0 100px;
  `}
  ${above.tablet`
    padding: 0 0 0 180px;
  `}
  ${above.ipadPro`
    padding: 0 0 0 300px;
    width: 50%;
  `}
  ${above.laptop`
    padding: 0 0 0 300px;
    width: 50%;
  `}
`;
