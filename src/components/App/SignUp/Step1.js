import React from "react";
import styled from "styled-components";

import Headline1 from "./Headlines/Headline1";
import Step1Copy from "./Copy/Step1Copy";
import InstructionCard from "../Shared/InstructionCard";
import ResetPrograms from "./ResetPrograms";

const Step1 = () => {
  return (
    <>
      <Headline1 />
      <InstructionCard topSpacing={40}>
        <Step1Copy />
      </InstructionCard>
      <ResetPrograms />
    </>
  );
};

export default Step1;
