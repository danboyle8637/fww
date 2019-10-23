import React from "react";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import { InnerButton } from "../../../styles/Buttons";
import ResetProgramCard from "../../Cards/ResetProgramCard";
import YouLearnCopy from "./Copy/YouLearnCopy";

const YouLearnSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <YouLearnCopy />
        <ResetProgramCard />
        <ElementContainer justifyCenter setMobileMarginTop={40}>
          <InnerButton to={"/7-day-reset-step1"}>
            Click To Choose Your Program
          </InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default YouLearnSection;
