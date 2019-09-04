import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import NavArrow from "../../svgs/NavigationArrow";
import bounceScrollArrow from "../../Animations/Tweens/bounceScrollArrow";

const ScrollDownArrow = ({ scrollId }) => {
  const arrowRef = useRef(null);
  // eslint-disable-next-line
  const scroll = ScrollToPlugin;

  useEffect(() => {
    const arrow = arrowRef.current;
    // Takes the ref and whether to kill the Tween
    bounceScrollArrow(arrow, false);

    return () => {
      // Kills the tween when component unmounts
      bounceScrollArrow(arrow, true);
      TweenMax.killTweensOf(window);
    };
  }, []);

  const handleScroll = () => {
    if (typeof window !== undefined) {
      TweenMax.to(window, 1, { scrollTo: `#${scrollId}` });
    }
  };

  return (
    <CircleBackground ref={arrowRef} onClick={handleScroll}>
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
