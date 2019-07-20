import React from "react";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import Headline2 from "./Headlines/Headline2";
import LeadCopy from "./Copy/LeadCopy";

const LeadSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <div id={"the-app-lead"} />
        <Headline2 />
        <LeadCopy />
      </ContentContainer>
    </SectionContainer>
  );
};

export default LeadSection;
