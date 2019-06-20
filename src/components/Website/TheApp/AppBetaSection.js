import React from "react";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import Headline3 from "./Headlines/Headline3";
import AppBetaCopy from "./Copy/AppBetaCopy";

const AppBetaSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline3 />
        <AppBetaCopy />
      </ContentContainer>
    </SectionContainer>
  );
};

export default AppBetaSection;
