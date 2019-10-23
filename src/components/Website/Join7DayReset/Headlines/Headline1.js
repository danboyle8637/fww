import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header1 } from "../../../../styles/Headlines";
import HeadlineCopy from "../Copy/HeadlineCopy";

const Headline1 = () => {
  return (
    <HeadlineContainer>
      <Header1
        upper
        mobileLarge
        primary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Finally
      </Header1>
      <Header1 mobileMedium tabletMedium secondary>
        a workout design
      </Header1>
      <Header1
        upper
        mobileLarge
        primary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Built
      </Header1>
      <Header1 upper mobileMedium tabletLarge secondary>
        For Busy Women
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
