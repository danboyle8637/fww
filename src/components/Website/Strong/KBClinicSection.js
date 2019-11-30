import React from "react";
import { navigate } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import KBClinicCopy from "./Copy/KBClinicCopy";
import BaseButton from "../../Buttons/BaseButton";

const KBClinicSection = () => {
  const handleButtonClick = () => navigate("/join-a-7-day-reset-program");

  return (
    <SectionContainer>
      <ContentContainer>
        <KBClinicCopy />
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <BaseButton handleClick={handleButtonClick}>
            Join the 7 Day Strong Reset
          </BaseButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default KBClinicSection;
