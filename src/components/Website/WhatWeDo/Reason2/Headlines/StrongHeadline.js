import React from "react";

import { ElementContainer } from "../../../../../styles/Containers";
import { Header3 } from "../../../../../styles/Headlines";

const StrongHeadline = () => {
  return (
    <ElementContainer column>
      <Header3
        secondary
        mobileMedium
        tabletLarge
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Ready for a new challenge?
      </Header3>
    </ElementContainer>
  );
};

export default StrongHeadline;
