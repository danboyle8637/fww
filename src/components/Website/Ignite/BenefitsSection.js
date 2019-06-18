import React from "react";
import styled from "styled-components";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import Headline2 from "./Headlines/Headline2";
import BenefitsBullets1 from "./Copy/BenefitsBullets1";
import BenefitsBullets2 from "./Copy/BenefitsBullets2";
import { above } from "../../../styles/Theme";

const BenefitsSection = () => {
  return (
    <SectionContainer setTabletMarginTop={"60px"}>
      <ContentContainer>
        <Headline2 />
        <BulletsContainer>
          <BenefitsBullets1 />
          <BenefitsBullets2 />
        </BulletsContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default BenefitsSection;

const BulletsContainer = styled.div`
  margin: 60px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  `}
`;
