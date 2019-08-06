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
        <ElementContainer setMobileMarginTop={40}>
          <InnerButton to={"/"}>Join A Reset Program For Free!</InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default YouLearnSection;