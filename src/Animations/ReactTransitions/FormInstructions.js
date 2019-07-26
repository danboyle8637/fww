import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax, Power2 } from "gsap/TweenMax";

const FormInstructions = ({ isTouched, children }) => {
  return (
    <Transition
      in={isTouched}
      mountOnEnter={true}
      unmountOnExit={true}
      addEndListener={(node, done) => {
        if (isTouched) {
          TweenMax.fromTo(
            node,
            0.5,
            {
              x: -300,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              onComplete: done,
            }
          );
        } else {
          TweenMax.fromTo(
            node,
            0.5,
            {
              x: 0,
              autoAlpha: 1,
            },
            {
              x: 300,
              autoAlpha: 0,
              onComplete: done,
            }
          );
        }
      }}
    >
      {children}
    </Transition>
  );
};

export default FormInstructions;
