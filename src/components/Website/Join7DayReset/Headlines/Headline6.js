// You Get Section Headline
import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline6 = () => {
  return (
    <ElementContainer column>
      <Header3
        mobileMedium
        secondary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Get Started Right Now!
      </Header3>
      <Header3 upper mobileLarge primary>
        Free!
      </Header3>
    </ElementContainer>
  );
};

export default Headline6;
