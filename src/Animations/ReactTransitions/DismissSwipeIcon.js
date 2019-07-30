import React from "react";
import { TweenMax } from "gsap/TweenMax";
import { Transition } from "react-transition-group";

const DismissSwipeIcon = ({ children, isTweening }) => {
  const scaleOut = (node, done) => {
    TweenMax.to(node, 1, { scale: 4, autoAlpha: 0, onComplete: done });
  };

  return (
    <Transition
      in={isTweening}
      mountOnEnter={true}
      unmountOnExit={true}
      timeout={500}
      addEndListener={(node, done) => {
        if (!isTweening) {
          scaleOut(node, done);
        }
      }}
    >
      {children}
    </Transition>
  );
};

export default DismissSwipeIcon;
