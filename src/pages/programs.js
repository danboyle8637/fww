import React from "react";

import { SectionContainer, HeadlineContainer } from "../styles/Containers";
import IgniteCard from "../components/Website/Programs/IgniteCard";
import BBCCard from "../components/Website/Programs/BBCCard";
import StrongCard from "../components/Website/Programs/StrongCard";

const Programs = () => {
  return (
    <SectionContainer setMobileMarginTop={"0"} setMobileMarginBottom={"0"}>
      <HeadlineContainer>
        <IgniteCard />
        <BBCCard />
        <StrongCard />
      </HeadlineContainer>
    </SectionContainer>
  );
};

export default Programs;
