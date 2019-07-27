import React, { useState, useEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";
import { TweenMax } from "gsap/TweenMax";
import styled from "styled-components";

import "../../greensock/ThrowPropsPlugin";

const DraggableRow = ({ numberOfCards, children }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  //const [prevEndValue, setPrevEndValue] = useState(0);
  const draggableContainerRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    setScreenWidth(width);
  }, []);

  useEffect(() => {
    const draggable = draggableContainerRef.current;
    const setStartPosition = Math.round((numberOfCards / 2) * screenWidth);

    TweenMax.set(draggable, {
      x: -setStartPosition,
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
      let snap;

      // TODO: Figure out how you can smoothly change the sign for a smooth scroll
      // When you start at a postive value and scroll to cards on the right
      // The + needs to be - for a really smooth scroll.
      // When you start at a negative value and scroll to cards on left
      // the + needs to stay plus for a really smooth scroll
      // Maybe try a when or something like that.
      if (endValue >= 0) {
        snap =
          Math.round(endValue / screenWidth) * screenWidth + screenWidth / 2;
      }

      if (endValue <= 0) {
        snap =
          Math.round(endValue / screenWidth) * screenWidth + screenWidth / 2;
      }
      // const activeCard = snap / screenWidth;

      return snap;
    } else {
      const snap = Math.round(endValue / screenWidth) * screenWidth;
      // const activeCard = snap / screenWidth;
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
