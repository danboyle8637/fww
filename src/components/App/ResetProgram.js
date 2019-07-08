import React from "react";

import { SectionContainer, ContentContainer } from "../../styles/Containers";
import { BodyText } from "../../styles/BodyText";

const ResetProgram = ({ programName }) => {
  return (
    <SectionContainer>
      <ContentContainer>
        <BodyText>Reset Program {programName}</BodyText>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ResetProgram;
