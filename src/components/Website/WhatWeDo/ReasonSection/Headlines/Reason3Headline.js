import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../../styles/Containers";
import { Header3 } from "../../../../../styles/Headlines";

const Headline2 = () => {
  return (
    <ElementContainer column>
      <Header3 secondary mobileMedium>
        3. We'll nag...
      </Header3>
      <Header3
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Bug and...
      </Header3>
      <BaseLineWrapper>
        <Header3 primary upper mobileLarge>
          Stay
        </Header3>
        <Header3 secondary mobileMedium>
          on
        </Header3>
        <Header3 primary upper mobileLarge>
          Top
        </Header3>
      </BaseLineWrapper>
      <Header3 primary upper mobileLarge>
        Of You!
      </Header3>
    </ElementContainer>
  );
};

export default Headline2;

const BaseLineWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 0px;
  align-items: end;
`;
