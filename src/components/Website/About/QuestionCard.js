import React from "react";
import styled from "styled-components";

import { SetBodyText } from "../../../styles/BodyText";
import { above } from "../../../styles/Theme";

const QuestionCard = ({ body, question }) => {
  return (
    <CardContainer>
      <CardWrapper>
        <Question>{question}</Question>
        <SetBodyText
          setMobileMarginTop={30}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </CardWrapper>
    </CardContainer>
  );
};

export default QuestionCard;

const CardContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  ${above.ipadPro`
    margin: 0 25px;
    width: 100%;
  `}
`;

const CardWrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #101010;
  border-bottom: 3px solid;
  border-color: ${props => props.theme.secondaryAccent};
  border-radius: 6px;
  width: 90%;
  transition: transform, box-shadow, 200ms ease-in-out;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 60%;
  `}
  ${above.ipadPro`
    flex-direction: column;
    align-items: flex-start;
    width: 345px;
    &:hover {
      box-shadow: 0 6px 4px 2px rgba(0,0,0,0.3);
      transform: translateY(-4px);
    }
  `}
`;

const Question = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.4px;
  line-height: 1.6;
  color: ${props => props.theme.secondaryAccent};
`;
