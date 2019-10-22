import React from "react";

import { ElementContainer } from "../../../../../styles/Containers";
import { Header1 } from "../../../../../styles/Headlines";

const Headline1 = () => {
  return (
    <ElementContainer column>
      <Header1
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Stop Doing
      </Header1>
      <Header1 upper primary mobileLarge>
        One Size
      </Header1>
      <Header1 upper primary mobileLarge>
        Fits All
      </Header1>
      <Header1
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Workouts
      </Header1>
    </ElementContainer>
  );
};

export default Headline1;
