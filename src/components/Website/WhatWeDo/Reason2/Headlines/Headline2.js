import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../../styles/Containers";
import { Header3 } from "../../../../../styles/Headlines";
import { above } from "../../../../../styles/Theme";

const Headline2 = () => {
  return (
    <ElementContainer column>
      <Header3
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        The
      </Header3>

      <EndOfGenericWrapper>
        <Header3 upper primary mobileLarge>
          End of
        </Header3>
        <Header3 upper primary mobileLarge>
          Generic
        </Header3>
      </EndOfGenericWrapper>

      <OneSizeFitsAllWrapper>
        <Header3 secondary mobileMedium>
          one size fits all
        </Header3>
        <Header3 secondary mobileMedium>
          workouts is here!
        </Header3>
      </OneSizeFitsAllWrapper>
    </ElementContainer>
  );
};

export default Headline2;

const EndOfGenericWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${above.mobile`
    grid-template-columns: auto auto;
    gap: 12px;
  `}
`;

const OneSizeFitsAllWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: end;
  ${above.mobile`
    margin: 8px 0 0 0;
    grid-template-columns: auto auto;
    gap: 12px;
  `}
`;
