import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";
import PageCheck from "../../../../svgs/PageCheck";
import { above } from "../../../../styles/Theme";

const Headline1 = () => {
  return (
    <HeadlineContainer>
      <Header3
        mobileMedium
        tertiary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        When you need a
      </Header3>
      <ElementContainer column alignSelfCenter setMobileMarginTop={40}>
        <HeadlineCheckWrapper>
          <Check />
          <Header3 mobileMedium tabletLarge primary upper>
            Workout
          </Header3>
        </HeadlineCheckWrapper>
        <HeadlineCheckWrapper>
          <Check />
          <Header3 mobileMedium tabletLarge primary upper>
            Meal Planning
          </Header3>
        </HeadlineCheckWrapper>
        <HeadlineCheckWrapper>
          <Check />
          <Header3 mobileMedium tabletLarge primary upper>
            Coaching
          </Header3>
        </HeadlineCheckWrapper>
        <HeadlineCheckWrapper>
          <Check />
          <Header3 mobileMedium tabletLarge primary upper>
            A Pick Me Up
          </Header3>
        </HeadlineCheckWrapper>
        <HeadlineCheckWrapper>
          <Check />
          <Header3 mobileMedium tabletLarge primary upper>
            Motivation
          </Header3>
        </HeadlineCheckWrapper>
      </ElementContainer>
    </HeadlineContainer>
  );
};

export default Headline1;

const HeadlineContainer = styled.div`
  margin: 80px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

const HeadlineCheckWrapper = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  ${above.mobile`
    gap: 20px;
  `}
`;

const Check = styled(PageCheck)`
  width: 24px;
  ${above.mobile`
    width: 40px;
  `}
`;
