import React from "react";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../../styles/Containers";
import { InnerButton } from "../../../../styles/Buttons";
import Headline2 from "./Headlines/Headline2";

const EndSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline2 />
        <ElementContainer setMobileMarginTop={60}>
          <InnerButton>The Final Secret Is...</InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default EndSection;
