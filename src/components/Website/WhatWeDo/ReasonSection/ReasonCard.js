import React from "react";
import styled from "styled-components";

import Reason1Headline from "./Headlines/Reason1Headline";
import Reason2Headline from "./Headlines/Reason2Headline";
import Reason3Headline from "./Headlines/Reason3Headline";
import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";
import { InnerButton } from "../../../../styles/Buttons";
import { above } from "../../../../styles/Theme";

const ReasonCard = ({ body, buttonText, headlineId, path }) => {
  const headlineArray = [
    { id: "reason1", component: <Reason1Headline /> },
    { id: "reason2", component: <Reason2Headline /> },
    { id: "reason3", component: <Reason3Headline /> },
  ];

  const headline = headlineArray.find(element => element.id === headlineId);

  return (
    <CardContainer>
      <CardWrapper>
        {headline.component}
        <ContentWrapper>
          <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
          <ElementContainer setMobileMarginTop={30}>
            <InnerButton to={path}>{buttonText}</InnerButton>
          </ElementContainer>
        </ContentWrapper>
      </CardWrapper>
    </CardContainer>
  );
};

export default ReasonCard;

const CardContainer = styled.div`
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
    flex-direction: row;
    align-items: center;
    width: 90%;
  `}
  ${above.tablet`
    width: 70%;
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

const ContentWrapper = styled.div`
  margin: 30px 0 0 0;
  ${above.mobile`
    margin: 0 0 0 20px;
  `}
  ${above.ipadPro`
    margin: 30px 0 0 0;
  `}
`;
