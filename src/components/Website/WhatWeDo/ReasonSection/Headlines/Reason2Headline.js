import React from "react";

import { ElementContainer } from "../../../../../styles/Containers";
import { Header3 } from "../../../../../styles/Headlines";

const Headline2 = () => {
  return (
    <ElementContainer column>
      <Header3
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        2. No More
      </Header3>
      <Header3 primary upper mobileLarge>
        One Size
      </Header3>
      <Header3 primary upper mobileLarge>
        Fits All
      </Header3>
      <Header3
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Workouts
      </Header3>
    </ElementContainer>
  );
};

export default Headline2;
