import React from "react";

import { HeadlineContainer } from "../../../styles/Containers";
import IgniteCard from "./IgniteCard";
import BBCCard from "./BBCCard";
import StrongCard from "./StrongCard";

const ProgramsAboveMobile = () => {
  return (
    <HeadlineContainer setTabletMarginTop={60}>
      <IgniteCard />
      <BBCCard />
      <StrongCard />
    </HeadlineContainer>
  );
};

export default ProgramsAboveMobile;
