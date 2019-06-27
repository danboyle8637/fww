import React from "react";

import { ElementContainer } from "../../../../../styles/Containers";
import { Header3 } from "../../../../../styles/Headlines";

const Headline2 = () => {
  return (
    <ElementContainer column>
      <Header3 secondary mobileMedium>
        1. Workouts
      </Header3>
      <Header3
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        designed for
      </Header3>
      <Header3 primary upper mobileLarge>
        Busy
      </Header3>
      <Header3 primary upper mobileLarge>
        Women
      </Header3>
    </ElementContainer>
  );
};

export default Headline2;
