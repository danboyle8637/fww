import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline3 = () => {
  return (
    <ElementContainer column setMobileMarginTop={60}>
      <Header3 mobileMedium tabletLarge secondary>
        Choose from a
      </Header3>
      <Header3
        mobileSmall
        tabletMedium
        primary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Beginner...
      </Header3>
      <Header3
        mobileSmall
        tabletMedium
        primary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Intermediate...
      </Header3>
      <Header3
        mobileSmall
        tabletMedium
        primary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        or Advanced
      </Header3>
      <Header3 mobileMedium tabletLarge secondary>
        Program!
      </Header3>
    </ElementContainer>
  );
};

export default Headline3;
