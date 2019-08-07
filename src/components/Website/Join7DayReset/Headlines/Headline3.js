import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const Headline3 = () => {
  return (
    <ElementContainer column setMobileMarginTop={60}>
      <Header3 mobileSmall tabletMedium primary>
        But it depends on which
      </Header3>
      <Header3
        mobileMedium
        tabletLarge
        secondary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Reset Program
      </Header3>
      <Header3 mobileMedium tabletLarge secondary>
        YOU Choose
      </Header3>
    </ElementContainer>
  );
};

export default Headline3;
