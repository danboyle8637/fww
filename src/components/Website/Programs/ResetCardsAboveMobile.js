import React from "react";

import { HeadlineContainer } from "../../../styles/Containers";
import IgniteResetCard from "./Cards/IgniteResetCard";
import BBCResetCard from "./Cards/BBCResetCard";
import StrongResetCard from "./Cards/StrongResetCard";

const ProgramsAboveMobile = () => {
  return (
    <HeadlineContainer setTabletMarginTop={60}>
      <IgniteResetCard />
      <BBCResetCard />
      <StrongResetCard />
    </HeadlineContainer>
  );
};

export default ProgramsAboveMobile;
