import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header1 } from "../../../../styles/Headlines";
import { above } from "../../../../styles/Theme";

const Headline1 = () => {
  return (
    <ElementContainer column>
      <Header1
        tertiary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        It's called...
      </Header1>
      <HeadlineWrapper>
        <Header1 primary upper mobileLarge>
          Kettle-
        </Header1>
        <Header1 primary upper mobileLarge>
          bolic
        </Header1>
      </HeadlineWrapper>
    </ElementContainer>
  );
};

export default Headline1;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${above.mobile`
    flex-direction: row;
  `}
`;
