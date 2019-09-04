import React from "react";
import styled from "styled-components";

import {
  SectionContainer,
  ElementContainer,
  ContentContainer,
} from "../../../../styles/Containers";
import TextBubbles from "./TextBubbles";
import Headline3 from "./Headline3";
import Headline1 from "./Headline1";
import Headline2 from "./Headline2";
import FWWLogo from "../../../../svgs/FWWLogo";

const TextMessageSection = () => {
  return (
    <SectionContainer>
      <TextMessageContainer>
        <div id="what-we-do-lead" />
        <Headline3 />
        <ElementContainer column setMobileMarginTop={60}>
          <TextBubbles client={true}>I need a workout</TextBubbles>
          <TextBubbles client={false}>I have just the one</TextBubbles>
        </ElementContainer>
        <ElementContainer column setMobileMarginTop={60}>
          <TextBubbles client={true}>
            I need a healthy, FAST, breakfast
          </TextBubbles>
          <TextBubbles client={false}>
            My breakfast sandwich is perfect. You'll love it!
          </TextBubbles>
        </ElementContainer>
        <ElementContainer column setMobileMarginTop={60}>
          <TextBubbles client={true}>
            I only have 12 minutes to workout. Help!?!
          </TextBubbles>
          <TextBubbles client={false}>
            Get one round of Switch done. It's better than skipping.
          </TextBubbles>
        </ElementContainer>
        <ElementContainer column setMobileMarginTop={60}>
          <TextBubbles client={true}>
            I need a good strength workout today.
          </TextBubbles>
          <TextBubbles client={false}>
            Awesome. Let's do a kettlebell workout!
          </TextBubbles>
        </ElementContainer>
      </TextMessageContainer>
      <ContentContainer>
        <Headline1 />
        <Logo />
        <Headline2 />
      </ContentContainer>
    </SectionContainer>
  );
};

export default TextMessageSection;

const TextMessageContainer = styled.div`
  padding: 0 1rem;
  width: 100%;
  max-width: 34rem;
`;

const Logo = styled(FWWLogo)`
  margin: 80px 0;
  width: 180px;
  align-self: center;
`;
