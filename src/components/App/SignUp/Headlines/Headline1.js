import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header1 } from "../../../../styles/Headlines";

const Headline1 = () => {
  return (
    <ElementContainer>
      <Header1
        mobileMedium
        secondary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Create your
      </Header1>
      <Header1 upper mobileLarge primary>
        Fit Profile
      </Header1>
    </ElementContainer>
  );
};

export default Headline1;
