import React from "react";
import styled from "styled-components";

import IgniteResetLogo from "../../../svgs/IgniteResetLogo";
import BodyBurnResetLogo from "../../../svgs/BodyBurnResetLogo";
import StrongResetLogo from "../../../svgs/StrongResetLogo";

const ResetPrograms = () => {
  return (
    <ResetLogoContainer>
      <LogoWrapper checked>
        <IgniteResetLogo />
        <FitnessLevel>Beginner</FitnessLevel>
      </LogoWrapper>
      <LogoWrapper>
        <BodyBurnResetLogo />
        <FitnessLevel>Intermediate</FitnessLevel>
      </LogoWrapper>
      <LogoWrapper>
        <StrongResetLogo />
        <FitnessLevel>Advanced</FitnessLevel>
      </LogoWrapper>
    </ResetLogoContainer>
  );
};

export default ResetPrograms;

const ResetLogoContainer = styled.div`
  margin: 40px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  gap: 20px;
  width: 80%;
`;

const LogoWrapper = styled.div`
  padding: 12px 8px 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${props => (props.checked ? `2px solid` : "none")};
  border-color: ${props => props.theme.primaryAccent};
  border-radius: 6px;
`;

const FitnessLevel = styled.p`
  margin: 2px 0 0 0;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.headlinePrimary};
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  align-self: flex-end;
`;
