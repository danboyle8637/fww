import React from "react";
import { navigate } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import BaseButton from "../../Buttons/BaseButton";
import Headline3 from "./Headlines/Headline3";
import ResetCopy from "./Copy/ResetCopy";

const ResetSection = () => {
  const handleButtonClick = () => navigate("/join-a-7-day-reset-program");

  return (
    <SectionContainer>
      <ContentContainer>
        <Headline3 />
        <ResetCopy />
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <BaseButton handleClick={handleButtonClick}>
            Join the 7 Day Ignite Reset!
          </BaseButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ResetSection;
