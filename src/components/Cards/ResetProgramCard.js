import React from "react";
import styled from "styled-components";

import IgniteReset from "../../svgs/IgniteResetLogo";
import BodyBurnReset from "../../svgs/BodyBurnResetLogo";
import StrongReset from "../../svgs/StrongResetLogo";
import { above } from "../../styles/Theme";

const ResetProgramCard = () => {
  const logos = [
    {
      id: 1,
      logo: <IgniteReset />,
      text: "Choose if you're more of a beginner",
    },
    {
      id: 2,
      logo: <BodyBurnReset />,
      text: "Choose if you're more intermediate",
    },
    {
      id: 3,
      logo: <StrongReset />,
      text: "Choose if you want a real challenge",
    },
  ];

  const cards = logos.map(program => {
    const id = program.id;
    const text = program.text;
    const logo = program.logo;

    return (
      <Card key={id}>
        <LogoWrapper>{logo}</LogoWrapper>
        <DescriptionWrapper>{text}</DescriptionWrapper>
      </Card>
    );
  });

  return <CardContainer>{cards}</CardContainer>;
};

export default ResetProgramCard;

const CardContainer = styled.div`
  margin: 60px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 30px;
  width: 100%;
  ${above.mobile`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

const Card = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12px;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 8px;
  width: 100%;
  ${above.mobile`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    justify-items: center;
  `}
`;

const LogoWrapper = styled.div`
  padding: 5px 0 0 0;
  width: 120px;
  ${above.mobile`
    width: 100%;
  `}
`;

const DescriptionWrapper = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: ${props => props.theme.headlinePrimary};
`;
