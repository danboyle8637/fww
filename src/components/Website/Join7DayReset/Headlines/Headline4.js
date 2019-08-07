// You Get Section Headline
import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline4 = () => {
  return (
    <ElementContainer column>
      <Header3 upper mobileMedium tabletLarge primary>
        Every Workout
      </Header3>
      <Header3
        mobileSmall
        tabletMedium
        secondary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        comes with:
      </Header3>
    </ElementContainer>
  );
};

export default Headline4;
