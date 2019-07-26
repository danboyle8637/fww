import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { above } from "../../../../styles/Theme";
import textMessageAni from "../../../../Animations/Tweens/textMessageAni";
import useSVGObserver from "../../../../hooks/useSVGObserver";

const TextBubbles = ({ children, client }) => {
  const textMessageRef = useRef(null);

  const [setNode, runAnimation] = useSVGObserver({
    rootMargin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    textMessageAni(textMessageRef.current, client, runAnimation, false);
  }, [runAnimation, client, textMessageRef]);

  useEffect(() => {
    return () => {
      textMessageAni(textMessageRef.current, client, runAnimation, true);
    };
  }, []);

  return (
    <BubbleWrapper ref={setNode} client={client}>
      <Bubble ref={textMessageRef} client={client}>
        <BubbleText>{children}</BubbleText>
      </Bubble>
    </BubbleWrapper>
  );
};

export default TextBubbles;

const BubbleWrapper = styled.div`
  align-self: ${props => (props.client ? "flex-start" : "flex-end")};
`;

const Bubble = styled.div`
  margin: 0 0 20px 0;
  padding: 8px 20px;
  background: ${props =>
    props.client ? "rgba(179, 182, 225, 0.3)" : "rgba(180, 76, 255, 0.3)"};
  border: 2px solid;
  border-color: ${props =>
    props.client ? props.theme.bodyText : props.theme.tertiaryAccent};
  border-radius: 8px;
  max-width: 280px;
  ${above.tablet`
    max-width: 320px;
  `}
`;

const BubbleText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.15rem;
  color: ${props => props.theme.whiteText};
`;
