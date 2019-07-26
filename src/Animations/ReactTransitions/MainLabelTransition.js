import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/TweenMax";

const MainLabelTransition = ({ isTouched, children }) => {
  return (
    <Transition
      in={isTouched}
      unmountOnExit={true}
      addEndListener={(node, done) => {
        if (isTouched) {
          TweenMax.set(node, {
            y: 0,
            fontSize: "16px",
            autoAlpha: 1,
          });
        } else {
          TweenMax.to(node, 0.5, {
            x: 300,
            fontSize: "12px",
            autoAlpha: 0,
            onComplete: done,
          });
        }
      }}
    >
      {children}
    </Transition>
  );
};

export default MainLabelTransition;
