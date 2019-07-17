import React from "react";
import { TweenMax } from "gsap";
import { Transition } from "react-transition-group";

import { useMenuContext } from "../../context/MenuContext";

const MenuDrawerAni = ({ children }) => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  return (
    <Transition
      in={menuState.isOpen}
      mountOnEnter={true}
      unmountOnExit={true}
      addEndListener={(node, done) => {
        if (menuState.isOpen) {
          TweenMax.fromTo(
            node,
            0.5,
            {
              //left: "100%",
              left: 1440,
              autoAlpha: 0,
              onComplete: done,
            },
            {
              //left: `${menuState.leftPosition}%`,
              left: 1340,
              autoAlpha: 1,
              onComplete: done,
            }
          );
        } else {
          TweenMax.to(node, 0.5, {
            left: "100%",
            onComplete: done,
          });
        }
      }}
    >
      {children}
    </Transition>
  );
};

export default MenuDrawerAni;
