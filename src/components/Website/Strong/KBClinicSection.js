import React from "react";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import KBClinicCopy from "./Copy/KBClinicCopy";
import { InnerButton } from "../../../styles/Buttons";

const KBClinicSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <KBClinicCopy />
        <ElementContainer setMobileMarginTop={60}>
          <InnerButton kettlebell={true} to={"/"}>
            Join the 7 Day Strong Reset
          </InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default KBClinicSection;
