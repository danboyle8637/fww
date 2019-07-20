import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../../styles/Containers";
import { Header1 } from "../../../../../styles/Headlines";

const Headline1 = () => {
  return (
    <ElementContainer column>
      <Header1 secondary mobileMedium>
        We'll nag you...
      </Header1>
      <Header1
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Bug you and...
      </Header1>
      <LineUpHeadlines>
        <Header1 primary mobileLarge upper>
          Stay
        </Header1>
        <Header1
          secondary
          mobileMedium
          setMLineHeight={1.1}
          setTLineHeight={1.1}
          setIpadLineHeight={1.1}
          setLLineHeight={1.1}
        >
          on
        </Header1>
        <Header1 primary mobileLarge upper>
          Top
        </Header1>
      </LineUpHeadlines>
      <Header1
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        You
      </Header1>
    </ElementContainer>
  );
};

export default Headline1;

const LineUpHeadlines = styled.div`
  display: flex;
  align-items: flex-end;
`;
