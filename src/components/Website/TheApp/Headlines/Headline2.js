import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline2 = () => {
  return (
    <ElementContainer>
      <Header3 secondary mobileMedium>
        This is going to be
      </Header3>
      <Header3 upper primary mobileLarge>
        Different
      </Header3>
    </ElementContainer>
  );
};

export default Headline2;
