import React from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { TweenMax, Power3 } from "gsap/TweenMax";

const PageTransition = ({ children, location }) => {
  const enter = node => {
    TweenMax.from(node, 0.5, {
      x: "-100vw",
      ease: Power3.easeOut,
      autoAlpha: 0,
      delay: 0.5,
      position: "absolute",
    });
  };

  const entering = node => {
    TweenMax.to(node, 0.5, {
      autoAlpha: 0.5,
    });
  };

  const entered = node => {
    TweenMax.to(node, 0.5, {
      x: 0,
      autoAlpha: 1,
      ease: Power3.easeOut,
    });
  };

  const exiting = node => {};

  const exit = node => {
    TweenMax.to(node, 1, {
      x: "100vw",
      autoAlpha: 0,
      ease: Power3.easeIn,
    });
  };

  return (
    <TransitionGroup component={null}>
      <Transition
        key={location.key}
        timeout={{
          appear: 500,
          enter: 500,
          exit: 1000,
        }}
        mountOnEnter={true}
        unmountOnExit={true}
        onEnter={node => enter(node)}
        // onEntering={node => entering(node)}
        onEntered={node => entered(node)}
        // onExiting={node => exiting(node)}
        onExit={node => exit(node)}
      >
        {children}
      </Transition>
    </TransitionGroup>
  );
};

export default PageTransition;
