import React from "react";
import styled from "styled-components";

const InstructionCard = ({ children, topSpacing }) => {
  return (
    <InstructionContainer topSpacing={topSpacing}>
      {children}
    </InstructionContainer>
  );
};

export default InstructionCard;

const InstructionContainer = styled.div`
  margin-top: ${props => `${props.topSpacing}px` || 0};
  padding: 12px;
  display: flex;
  flex-direction: column;
  border-left: 3px solid ${props => props.theme.primaryAccent};
  border-radius: 0 6px 6px 0;
  background: ${props => props.theme.mainBackgroundBorderColor};
`;
