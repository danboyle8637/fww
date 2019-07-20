import React from "react";
import styled from "styled-components";

import { above } from "../../../../styles/Theme";

const TextBubbles = React.forwardRef(({ children, client, align }, ref) => {
  return (
    <Bubble ref={ref} client={client} align={align}>
      <BubbleText>{children}</BubbleText>
    </Bubble>
  );
});

export default TextBubbles;

const Bubble = styled.div`
  margin: 0 0 20px 0;
  padding: 8px 20px;
  background: ${props =>
    props.client ? "rgba(179, 182, 225, 0.3)" : "rgba(180, 76, 255, 0.3)"};
  border: 2px solid;
  border-color: ${props =>
    props.client ? props.theme.bodyText : props.theme.tertiaryAccent};
  border-radius: 8px;
  align-self: ${props => {
    if (props.align === "left") return "flex-start";
    if (props.align === "right") return "flex-end";
    return "center";
  }};
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
