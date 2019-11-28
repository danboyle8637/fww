import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import { TweenMax, Power2 } from "gsap/TweenMax";

const MainLabelTransition = ({ isTextArea, isTouched, children }) => {
  const [yPosition, setYPosition] = useState("-50%");

  useEffect(() => {
    if (isTextArea) {
      setYPosition("20%");
    }
  }, [isTextArea]);

  const mainLabelEnter = node => {
    TweenMax.to(node, 0.3, {
      y: yPosition,
      fontSize: "16px",
      autoAlpha: 1,
      ease: Power2.easeOut,
    });
  };

  const mainLabelExit = node => {
    TweenMax.to(node, 0.3, {
      x: 300,
      fontSize: "12px",
      autoAlpha: 0,
      ease: Power2.easeOut,
    });
  };

  return (
    <Transition
      in={isTouched}
      timeout={300}
      mountOnEnter={true}
      unmountOnExit={true}
      onEntering={node => mainLabelEnter(node)}
      onEnter={node => mainLabelEnter(node)}
      onExit={node => mainLabelExit(node)}
    >
      {children}
    </Transition>
  );
};

export default MainLabelTransition;
