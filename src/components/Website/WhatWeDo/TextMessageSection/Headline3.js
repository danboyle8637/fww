import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline3 = () => {
  return (
    <ElementContainer column>
      <Header3 mobileMedium secondary>
        Forget Siri...
      </Header3>
      <Header3
        mobileMedium
        secondary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Skip Alexa...
      </Header3>
      <Header3 upper mobileLarge primary>
        Ask Me!
      </Header3>
    </ElementContainer>
  );
};

export default Headline3;
