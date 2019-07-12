import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header1, Header2 } from "../../../../styles/Headlines";

const Headline1 = () => {
  return (
    <ElementContainer
      column
      setMobileMarginTop={60}
      setTabletMarginTop={180}
      setLaptopMarginTop={200}
      moveMobileX={16}
      moveTabletX={160}
      moveLaptopX={400}
    >
      <Header1 secondary>We're like a</Header1>
      <Header1
        primary
        upper
        mobileLarge
        setMLineHeight={1.0}
        setTLineHeight={1.0}
        setLLineHeight={1.0}
      >
        Personal
      </Header1>
      <Header1
        primary
        upper
        mobileLarge
        setMLineHeight={1.0}
        setTLineHeight={1.0}
        setLLineHeight={1.0}
      >
        Assistant
      </Header1>
      <Header2
        secondary
        mobileSmall
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        (fitness & nutrition style!)
      </Header2>
    </ElementContainer>
  );
};

export default Headline1;
