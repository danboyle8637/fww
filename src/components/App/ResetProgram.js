import React from "react";

import { SectionContainer } from "../../styles/Containers";
import ResetHeader from "./ResetPrograms/ResetHeader";
import ProgressIndicator from "./ResetPrograms/ProgressIndicator";

const ResetProgram = () => {
  return (
    <SectionContainer>
      <ResetHeader />
      <ProgressIndicator />
    </SectionContainer>
  );
};

export default ResetProgram;
