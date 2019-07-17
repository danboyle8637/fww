import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline3 = () => {
  return (
    <ElementContainer column>
      <BaselineWrapper>
        <Header3
          mobileMedium
          secondary
          setMLineHeight={1.2}
          setTLineHeight={1.2}
          setIpadLineHeight={1.2}
          setLLineHeight={1.2}
        >
          Just
        </Header3>
        <Header3 upper mobileLarge primary>
          Ask:
        </Header3>
      </BaselineWrapper>
    </ElementContainer>
  );
};

export default Headline3;

const BaselineWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: end;
`;
