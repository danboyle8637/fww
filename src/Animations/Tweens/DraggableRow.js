import React, { useState, useEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";
import { TweenMax } from "gsap/TweenMax";
import styled from "styled-components";

import "../../greensock/ThrowPropsPlugin";

const DraggableRow = ({ numberOfCards, children }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  //const [endValue, setEndValue] = useState(0);
  const draggableContainerRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    setScreenWidth(width);
  }, []);

  useEffect(() => {
    const draggable = draggableContainerRef.current;
    const setStartPosition = Math.round((numberOfCards / 2) * screenWidth);

    TweenMax.set(draggable, {
      x: setStartPosition,
    });

    Draggable.create(draggable, {
      type: "x",
      throwProps: true,
      bounds: window,
      cursor: "grab",
      activeCursor: "grabbing",
      dragResistance: 0.2,
      edgeResistance: 0.6,
      snap: snapX,
    });
  }, [screenWidth]);

  const snapX = endValue => {
    if (numberOfCards % 2 === 0) {
      console.log(endValue);
      let snap;
      if (endValue >= 0) {
        snap =
          Math.round(endValue / screenWidth) * screenWidth + screenWidth / 2;
      }

      if (endValue <= 0) {
        snap =
          Math.round(endValue / screenWidth) * screenWidth - screenWidth / 2;
      }

      return snap;
    } else {
      const snap = Math.round(endValue / screenWidth) * screenWidth;
      return snap;
    }
    //const activeCard = snapValue / screenWidth;
  };

  return (
    <DraggableContainer ref={draggableContainerRef}>
      {children}
    </DraggableContainer>
  );
};

export default DraggableRow;

const DraggableContainer = styled.div`
  margin: 8px 0 0 0;
  display: flex;
`;
