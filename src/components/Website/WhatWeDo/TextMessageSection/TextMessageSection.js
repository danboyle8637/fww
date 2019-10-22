import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import TextBubble from "./TextBubble";

const TextMessageSection = () => {
  return (
    <MessageContainer>
      <ElementContainer column setMobileMarginTop={60}>
        <TextBubble client={true}>I need a workout</TextBubble>
        <TextBubble client={false}>I have just the one</TextBubble>
      </ElementContainer>
      <ElementContainer column setMobileMarginTop={60}>
        <TextBubble client={true}>I need a healthy, FAST, breakfast</TextBubble>
        <TextBubble client={false}>
          My breakfast sandwich is perfect. You'll love it!
        </TextBubble>
      </ElementContainer>
      <ElementContainer column setMobileMarginTop={60}>
        <TextBubble client={true}>
          I only have 12 minutes to workout. Help!?!
        </TextBubble>
        <TextBubble client={false}>
          Get one round of Switch done. It's better than skipping.
        </TextBubble>
      </ElementContainer>
      <ElementContainer column setMobileMarginTop={60}>
        <TextBubble client={true}>
          I need a good strength workout today.
        </TextBubble>
        <TextBubble client={false}>
          Awesome. Let's do a kettlebell workout!
        </TextBubble>
      </ElementContainer>
    </MessageContainer>
  );
};

export default TextMessageSection;

const MessageContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`;
