import React from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
import { Transition } from "react-transition-group";

import PublicLoginMenu from "./PublicLoginMenu";
import { useMenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

const RightMenuDrawer = () => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  const showRightMenu = (node, done) => {
    TweenMax.fromTo(
      node,
      0.3,
      {
        x: "100%",
        onComplete: done,
      },
      {
        x: "0%",
        onComplete: done,
      }
    );
  };

  const exitRightMenu = (node, done) => {
    TweenMax.to(node, 0.3, {
      x: "100%",
      onComplete: done,
    });
  };

  return (
    <Transition
      in={menuState.isOpen}
      mountOnEnter={true}
      unmountOnExit={true}
      addEndListener={(node, done) => {
        if (menuState.isOpen) {
          showRightMenu(node, done);
        } else {
          exitRightMenu(node, done);
        }
      }}
    >
      <RightDrawer>
        <PublicLoginMenu />
      </RightDrawer>
    </Transition>
  );
};

export default RightMenuDrawer;

const RightDrawer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.mainBackgroundBorderColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 46%;
  padding: 20px 0;
  overflow: hidden;
  z-index: 1009;
  ${above.ipadPro`
    width: 50%;
  `}
`;
