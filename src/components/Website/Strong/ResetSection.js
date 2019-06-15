import React from "react";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import Headline4 from "./Headlines/Headline4";
import ResetCopy from "./Copy/ResetCopy";

const ResetSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline4 />
        <ResetCopy />
      </ContentContainer>
    </SectionContainer>
  );
};

export default ResetSection;
