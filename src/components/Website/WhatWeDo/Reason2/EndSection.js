import React from "react";
import { navigate } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../../styles/Containers";
import BaseButton from "../../../Buttons/BaseButton";
import Headline2 from "./Headlines/Headline2";

const EndSection = () => {
  const handleButtonClick = () => navigate("/online-personal-training");

  return (
    <SectionContainer>
      <ContentContainer>
        <Headline2 />
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <BaseButton handleClick={handleButtonClick}>
            The Final Missing Piece?
          </BaseButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default EndSection;
