import React from "react";

import { ElementContainer } from "../../../../../styles/Containers";
import { Header1 } from "../../../../../styles/Headlines";

const Headline1 = () => {
  return (
    <ElementContainer column>
      <Header1 secondary mobileMedium setMLineHeight={1.4}>
        No more
      </Header1>
      <Header1 upper primary mobileLarge>
        One Size
      </Header1>
      <Header1 upper primary mobileLarge>
        Fits All
      </Header1>
      <Header1 secondary mobileMedium setMLineHeight={1.4}>
        Workouts
      </Header1>
    </ElementContainer>
  );
};

export default Headline1;
