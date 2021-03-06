import React from "react";

import { Header3 } from "../../../../styles/Headlines";
import { ElementContainer } from "../../../../styles/Containers";

const Headline3 = () => {
  return (
    <ElementContainer column>
      <Header3 upper mobileLarge primary>
        Premium
      </Header3>
      <Header3
        mobileMedium
        secondary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Programs:
      </Header3>
    </ElementContainer>
  );
};

export default Headline3;
