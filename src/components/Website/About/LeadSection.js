import React from "react";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import Headline2 from "./Headlines/Headline2";
import Headline3 from "./Headlines/Headline3";
import LeadCopy1 from "./Copy/LeadCopy1";
import LeadCopy2 from "./Copy/LeadCopy2";

const LeadSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline2 />
        <LeadCopy1 />
        <Headline3 />
        <LeadCopy2 />
      </ContentContainer>
    </SectionContainer>
  );
};

export default LeadSection;
