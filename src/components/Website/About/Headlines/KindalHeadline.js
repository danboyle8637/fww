import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const KindalHeadline = () => {
  return (
    <ElementContainer column>
      <Header3
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        I'm
      </Header3>
      <Header3 upper primary mobileLarge>
        Kindal
      </Header3>
    </ElementContainer>
  );
};

export default KindalHeadline;
