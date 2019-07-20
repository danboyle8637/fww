import React from "react";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import Headline1 from "./Headlines/Headline1";
import LeadCopy from "./Copy/LeadCopy";

const LeadSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <div id={"ignite-lead"} />
        <Headline1 />
        <LeadCopy />
      </ContentContainer>
    </SectionContainer>
  );
};

export default LeadSection;
