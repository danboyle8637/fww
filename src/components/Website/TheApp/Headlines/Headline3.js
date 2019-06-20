import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline3 = () => {
  return (
    <ElementContainer column>
      <Header3
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Get on our
      </Header3>
      <Header3 upper tertiary mobileLarge>
        Beta List
      </Header3>
    </ElementContainer>
  );
};

export default Headline3;
