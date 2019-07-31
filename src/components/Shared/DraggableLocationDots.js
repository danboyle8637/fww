import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/TweenMax";

import MorphSVG from "../../greensock/MorphSVGPlugin";
import { ElementContainer } from "../../styles/Containers";
import DraggableLocationDot from "../../svgs/DraggableLocationDot";

const DraggableLocationDots = ({ numDots }) => {
  // eslint-disable-next-line
  const morphSVG = MorphSVG;
  const [numberOfDots, setNumberOfDots] = useState([]);

  useEffect(() => {
    const dotMap = [];

    for (let i = 0; i < numDots; i++) {
      dotMap.push(i);
    }

    setNumberOfDots(dotMap);
  }, []);

  const dots = numberOfDots.map(el => <LocationDot key={el} />);

  console.log(numberOfDots);

  return <ElementContainer justifyCenter>{dots}</ElementContainer>;
};

export default DraggableLocationDots;

const LocationDot = styled(DraggableLocationDot)`
  margin: 0 20px 0 0;
  width: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
