import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header1, Header2 } from "../../../../styles/Headlines";

const Headline1 = () => {
  return (
    <ElementContainer column>
      <Header1 upper tertiary mobileLarge>
        Smashing
      </Header1>
      <Header2
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        the
      </Header2>
      <Header1 upper primary mobileLarge>
        Status
      </Header1>
      <Header1 upper primary mobileLarge>
        Quo!
      </Header1>
    </ElementContainer>
  );
};

export default Headline1;
