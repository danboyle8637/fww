import React from "react";

import { Header1 } from "../../../../styles/Headlines";
import { ElementContainer } from "../../../../styles/Containers";

const Headline1 = () => {
  return (
    <ElementContainer column>
      <Header1 upper mobileLarge primary>
        Workout
      </Header1>
      <Header1 upper mobileLarge primary>
        Programs
      </Header1>
    </ElementContainer>
  );
};

export default Headline1;
