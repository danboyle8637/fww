import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BackgroundImageLoader = () => {
  const [width, setWidth] = useState("0px");
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    setWidth(`${screenWidth}px`);
    setHeight(`${screenHeight}px`);
  }, []);

  return <Card width={width} height={height} />;
};

export default BackgroundImageLoader;

const Card = styled.div`
  background: ${props => props.theme.mainBackgroundBorderColor};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
`;
