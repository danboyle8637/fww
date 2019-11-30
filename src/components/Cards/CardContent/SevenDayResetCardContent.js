import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import { BodyText } from "../../../styles/BodyText";
import BaseButton from "../../Buttons/BaseButton";
import { above } from "../../../styles/Theme";

const SevenDayResetCardContent = () => {
  const handleBaseButtonClick = () => navigate("/join-a-7-day-reset-program");

  return (
    <ContentContainer>
      <Headline>Get Started for FREE!</Headline>
      <SubHeadline>Join a 7 Day Reset Program</SubHeadline>
      <BodyText setMobileMarginTop={40}>
        Get 5 workouts to re-teach correct exercise form… push your
        comfort-zone… and introduce you to a new workout style designed for busy
        women like you.
      </BodyText>
      <BaseButton handleClick={handleBaseButtonClick}>
        Create a FREE Account
      </BaseButton>
    </ContentContainer>
  );
};

export default SevenDayResetCardContent;

const ContentContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const Headline = styled.h3`
  margin: 30px 0 0 0;
  padding: 0;
  font-size: 38px;
  color: ${props => props.theme.strongBodyText};
  letter-spacing: 0.1rem;
  ${above.mobile`
    font-size: 44px;
  `}
  ${above.ipadPro`
    margin: 0;
  `}
`;

const SubHeadline = styled.h5`
  margin: 12px 0 0 0;
  padding: 0;
  font-size: 14px;
  color: ${props => props.theme.bodyText};
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: 400;
`;
