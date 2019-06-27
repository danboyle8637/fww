import React from "react";
import styled from "styled-components";

import {
  SectionContainer,
  ElementContainer,
  ContentContainer,
} from "../../../../styles/Containers";
import TextBubbles from "./TextBubbles";
import Headline1 from "./Headline1";
import Headline2 from "./Headline2";
import FWWLogo from "../../../../svgs/FWWLogo";

const TextMessageSection = () => {
  return (
    <SectionContainer>
      <TextMessageContainer>
        <ElementContainer column>
          <TextBubbles align={"left"} client={true}>
            I need a workout
          </TextBubbles>
          <TextBubbles align={"right"} client={false}>
            I have just the one
          </TextBubbles>
        </ElementContainer>
        <ElementContainer column setMobileMarginTop={60}>
          <TextBubbles align={"left"} client={true}>
            I need a healthy, FAST, breakfast
          </TextBubbles>
          <TextBubbles align={"right"} client={false}>
            The ##### breakfast is perfect. You'll love this!
          </TextBubbles>
        </ElementContainer>
        <ElementContainer column setMobileMarginTop={60}>
          <TextBubbles align={"left"} client={true}>
            I only have 12 minutes to workout. Help!?!
          </TextBubbles>
          <TextBubbles align={"right"} client={false}>
            Get one round of Switch done. It's better than skipping.
          </TextBubbles>
        </ElementContainer>
        <ElementContainer column setMobileMarginTop={60}>
          <TextBubbles align={"left"} client={true}>
            I need a good strength workout today.
          </TextBubbles>
          <TextBubbles align={"right"} client={false}>
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
