import React from "react";

import { SectionContainer, ContentContainer } from "../styles/Containers";
import HeaderSection from "../components/Website/7DayResetStep1/HeaderSection";
import ResetStep1Form from "../components/Website/7DayResetStep1/ResetStep1Form";

const SevenDayResetStep1 = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <HeaderSection />
        <ResetStep1Form />
      </ContentContainer>
    </SectionContainer>
  );
};

export default SevenDayResetStep1;
