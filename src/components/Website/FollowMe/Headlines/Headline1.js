import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header1 } from "../../../../styles/Headlines";

const Headline1 = () => {
  return (
    <ElementContainer column>
      <Header1 secondary mobileMedium>
        Stay connected
      </Header1>
      <Header1
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        where it matters
      </Header1>
      <Header1 upper primary mobileLarge>
        To You!
      </Header1>
    </ElementContainer>
  );
};

export default Headline1;
