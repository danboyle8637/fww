import React from "react";

import { SectionContainer, ContentContainer } from "../../styles/Containers";
import Step1 from "./SignUp/Step1";

const SignUp = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Step1 />
      </ContentContainer>
    </SectionContainer>
  );
};

export default SignUp;
