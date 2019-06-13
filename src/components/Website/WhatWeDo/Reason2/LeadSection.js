import React from "react";

import {
  SectionContainer,
  ContentContainer,
} from "../../../../styles/Containers";
import Headline1 from "./Headlines/Headline1";
import Reason2Lead from "./Copy/Reason2Lead";

const LeadSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline1 />
        <Reason2Lead />
      </ContentContainer>
    </SectionContainer>
  );
};

export default LeadSection;
