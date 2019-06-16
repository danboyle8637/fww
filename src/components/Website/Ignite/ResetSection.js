import React from "react";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import Headline3 from "./Headlines/Headline3";
import ResetCopy from "./Copy/ResetCopy";

const ResetSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline3 />
        <ResetCopy />
      </ContentContainer>
    </SectionContainer>
  );
};

export default ResetSection;
