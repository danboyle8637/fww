import React from "react";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import { InnerButton } from "../../../styles/Buttons";
import Headline3 from "./Headlines/Headline3";
import YouLearnCopy from "./Copy/YouLearnCopy";

const YouLearnSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <YouLearnCopy />
        <Headline3 />
        <ElementContainer justifyCenter setMobileMarginTop={40}>
          <InnerButton to={"/7-day-reset-step1"}>
            Join A Reset Program For Free!
          </InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default YouLearnSection;
