import React from "react";
import styled from "styled-components";

import NavigationArrow from "../../../../svgs/NavigationArrow";

const SliderButtons = ({ handleSlide, disableNext, disablePrev }) => {
  return (
    <ButtonContainer>
      <Button onClick={() => handleSlide("prev")}>
        <PrevArrow disable={disablePrev} />
      </Button>
      <Button onClick={() => handleSlide("next")}>
        <NextArrow disable={disableNext} />
      </Button>
    </ButtonContainer>
  );
};

export default SliderButtons;

const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  transform: translateX(-50%);
  z-index: 2;
`;

const Button = styled.button`
  margin: 0;
  padding: 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.mainBackgroundColor};
  border: none;
  border-radius: 4px;
  width: 100px;
`;

const NextArrow = styled(NavigationArrow)`
  width: 10px;
  opacity: ${props => (props.disable ? "0.2" : "1")};
`;

const PrevArrow = styled(NavigationArrow)`
  width: 10px;
  transform: rotate(180deg);
  opacity: ${props => (props.disable ? "0.2" : "1")};
`;
