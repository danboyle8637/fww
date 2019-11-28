import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax, Power2 } from "gsap/TweenMax";

const NavCTAButtonTransition = ({ menuOpen, children }) => {
  const buttonEnter = node => {
    TweenMax.fromTo(
      node,
      0.5,
      {
        y: -80,
        autoAlpha: 0,
        ease: Power2.easeOut,
      },
      {
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut,
      }
    );
  };

  const buttonExit = node => {
    TweenMax.to(node, 0.5, {
      y: -80,
      autoAlpha: 0,
      ease: Power2.easeOut,
    });
  };

  return (
    <Transition
      in={!menuOpen}
      timeout={300}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={node => buttonEnter(node)}
      onExit={node => buttonExit(node)}
    >
      {children}
    </Transition>
  );
};

export default NavCTAButtonTransition;
