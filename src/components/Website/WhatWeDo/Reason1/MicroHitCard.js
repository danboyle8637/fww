import React from "react";
import styled from "styled-components";

import { BodyText } from "../../../../styles/BodyText";
import MicroHITLogo from "../../../../svgs/MicroHITSLogo";
import { above } from "../../../../styles/Theme";

const MicroHitCard = () => {
  return (
    <CardContainer>
      <Logo />
      <Subhead>Micro High Intensity Training Sessions</Subhead>
      <BodyText setMobileMarginTop={20}>
        Short intense workout sessions you repeat or combine to create a workout
        that fits your day
      </BodyText>
    </CardContainer>
  );
};

export default MicroHitCard;

const CardContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px;
  ${above.mobile`
    padding: 20px;
    align-self: center;
    width: 70%;
  `}
`;

const Logo = styled(MicroHITLogo)`
  width: 100%;
`;

const Subhead = styled.h4`
  margin: 12px 0 0 0;
  padding: 0;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.theme.strongBodyText};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  line-height: 1.6;
  ${above.tablet`
    font-size: 16px;
    letter-spacing: 0.28rem;
  `}
`;
