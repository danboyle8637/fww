import React from "react";
import { navigate } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import Headline4 from "./Headlines/Headline4";
import ResetCopy from "./Copy/ResetCopy";
import BaseButton from "../../Buttons/BaseButton";

const ResetSection = () => {
  const handleButtonClick = () => navigate("/join-a-7-day-reset-program");

  return (
    <SectionContainer>
      <ContentContainer>
        <Headline4 />
        <ResetCopy />
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <BaseButton handleClick={handleButtonClick}>
            Join the 7 Day Strong Reset!
          </BaseButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ResetSection;
