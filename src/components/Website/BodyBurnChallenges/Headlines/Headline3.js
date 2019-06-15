import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline3 = () => {
  return (
    <ElementContainer column>
      <Header3
        tertiary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Want to
      </Header3>
      <HeadlineWrapper>
        <Header3 upper primary mobileLarge>
          Try it
        </Header3>
        <Header3 upper primary mobileLarge>
          Today?
        </Header3>
      </HeadlineWrapper>
    </ElementContainer>
  );
};

export default Headline3;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateX(6px);
`;
