import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

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
        What's the
      </Header3>
      <Header3 upper primary mobileLarge>
        Status
      </Header3>
      <Header3 upper primary mobileLarge>
        Quo?
      </Header3>
    </ElementContainer>
  );
};

export default Headline2;
