import React, { useState, useEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";
import { TweenMax } from "gsap/TweenMax";
import styled from "styled-components";

import "../../greensock/ThrowPropsPlugin";
import { useActiveCardContext } from "../../context/ActiveSlideContext";
import { above } from "../../styles/Theme";

const DraggableRow = ({ numberOfCards, children }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const draggableContainerRef = useRef(null);
  const prevEndValueRef = useRef(1500);
  // eslint-disable-next-line
  const [activeCardState, dispatch] = useActiveCardContext();

  useEffect(() => {
    const width = window.innerWidth;
    setScreenWidth(width);
    setStartPosition(Math.floor(numberOfCards / 2) * width);
  }, []);

  useEffect(() => {
    const draggable = draggableContainerRef.current;
    TweenMax.set(draggable, {
      x: startPosition,
    });

    Draggable.create(draggable, {
      type: "x",
      throwProps: true,
      bounds: window,
      cursor: "grab",
      activeCursor: "grabbing",
      dragResistance: 0.5,
      edgeResistance: 0.6,
      snap: snapX,
    });
  }, [startPosition]);

  const snapX = endValue => {
    if (numberOfCards % 2 === 0) {
      let snap;

      if (endValue > 0 && endValue <= prevEndValueRef.current) {
        snap =
          Math.round(endValue / screenWidth) * screenWidth - screenWidth / 2;
      }

      if (endValue > 0 && endValue >= prevEndValueRef.current) {
        snap =
          Math.round(endValue / screenWidth) * screenWidth + screenWidth / 2;
      }

      if (endValue < 0 && endValue >= prevEndValueRef.current) {
        snap =
          Math.round(endValue / screenWidth) * screenWidth + screenWidth / 2;
      }

      if (endValue < 0 && endValue <= prevEndValueRef.current) {
        snap =
          Math.round(endValue / screenWidth) * screenWidth - screenWidth / 2;
      }

      const activeCard = snap / screenWidth;
      dispatch({ type: "setActiveCard", value: activeCard });
      prevEndValueRef.current = endValue;

      return snap;
    } else {
      const snap = Math.round(endValue / screenWidth) * screenWidth;
      console.log(snap);
      const activeCard = snap / screenWidth;
      dispatch({ type: "setActiveCard", value: activeCard });
      return snap;
    }
  };

  return (
    <DraggableContainer ref={draggableContainerRef}>
      {children}
    </DraggableContainer>
  );
};

export default DraggableRow;

const DraggableContainer = styled.div`
  display: flex;
`;
