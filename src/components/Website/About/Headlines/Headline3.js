import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline3 = () => {
  return (
    <ElementContainer column setMobileMarginTop={60} setMobileMarginBottom={60}>
      <Header3
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        We're going to
      </Header3>
      <Header3 upper primary mobileLarge>
        Smash It!
      </Header3>
    </ElementContainer>
  );
};

export default Headline3;
