import React from "react";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import Headline5 from "./Headlines/Headline5";
import CTACopy from "./Copy/CTACopy";

const CTASection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline5 />
        <CTACopy />
      </ContentContainer>
    </SectionContainer>
  );
};

export default CTASection;
