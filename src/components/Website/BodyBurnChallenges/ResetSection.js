import React from "react";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import { InnerButton } from "../../../styles/Buttons";
import Headline3 from "./Headlines/Headline3";
import ResetCopy from "./Copy/ResetCopy";

const ResetSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline3 />
        <ResetCopy />
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <InnerButton to={"/"}>Sign Up for the 7 Day BBC Reset</InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ResetSection;
