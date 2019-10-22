import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header1 } from "../../../../styles/Headlines";
import HeadlineCopy from "../Copy/HeadlineCopy";

const Headline1 = () => {
  return (
    <HeadlineContainer>
      <Header1
        mobileMedium
        tabletMedium
        secondary
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        7 Days of
      </Header1>
      <DetailedHeader upper mobileSmall primary>
        Re-learning correct form
      </DetailedHeader>

      <DetailedHeader upper mobileSmall tabletLarge primary>
        Discovering new exercises
      </DetailedHeader>
      <DetailedHeader upper mobileSmall tabletLarge secondary>
        Getting pushed to your limit
      </DetailedHeader>
      <Header1
        upper
        mobileMedium
        tabletLarge
        primary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        & Finding a Better
      </Header1>
      <Header1 upper mobileMedium tabletLarge secondary>
        Way to Workout
      </Header1>
      <HeadlineCopy />
    </HeadlineContainer>
  );
};

export default Headline1;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailedHeader = styled.h1`
  font-weight: 300;
  font-size: 22px;
  color: ${props =>
    props.primary
      ? props.theme.headlinePrimary
      : props.theme.headlineSecondary};
`;
