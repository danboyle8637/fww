import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline2 = () => {
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
        Discover a new
      </Header3>
      <Header3 upper mobileLarge primary>
        Workout
      </Header3>
      <ElementContainer moveMobileX={10}>
        <Header3 upper mobileLarge primary>
          Style
        </Header3>
      </ElementContainer>
    </ElementContainer>
  );
};

export default Headline2;
