import React from "react";
import styled from "styled-components";

import NavArrow from "../../svgs/NavigationArrow";

const ScrollDownArrow = () => {
  const handleScroll = () => {
    console.log("Scroll down clicked");
  };

  return (
    <CircleBackground onClick={handleScroll}>
      <Arrow />
    </CircleBackground>
  );
};

export default ScrollDownArrow;

const CircleBackground = styled.div`
  margin: 60px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(16, 16, 16, 0.6);
  border-radius: 50%;
  width: 52px;
  height: 52px;
  align-self: center;
  cursor: pointer;
`;

const Arrow = styled(NavArrow)`
  width: 20px;
  transform: rotate(90deg);
`;
