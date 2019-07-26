import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header1 } from "../../../../styles/Headlines";

const Headline1 = () => {
  return (
    <ElementContainer column>
      <Header1
        primary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Got questions?
      </Header1>
      <Header1 upper tertiary mobileLarge>
        Reach Out!
      </Header1>
    </ElementContainer>
  );
};

export default Headline1;
