import React from "react";
import { TweenMax } from "gsap/TweenMax";
import { Transition } from "react-transition-group";

const DismissSwipeIcon = ({ children, isTweening }) => {
  const scaleOut = node => {
    TweenMax.to(node, 1, { scale: 4, autoAlpha: 0 });
  };

  return (
    <Transition
      in={isTweening}
      mountOnEnter={true}
      unmountOnExit={true}
      timeout={500}
      onExit={node => scaleOut(node)}
    >
      {children}
    </Transition>
  );
};

export default DismissSwipeIcon;
