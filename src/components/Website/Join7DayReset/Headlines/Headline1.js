import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header1 } from "../../../../styles/Headlines";
import HeadlineCopy from "../Copy/HeadlineCopy";

const Headline1 = () => {
  return (
    <ElementContainer column>
      <Header1 upper mobileLarge primary>
        Reset
      </Header1>
      <ElementContainer column moveMobileX={3}>
        <Header1
          mobileSmall
          tabletMedium
          secondary
          setTLineHeight={1.4}
          setIpadLineHeight={1.4}
          setLLineHeight={1.4}
        >
          how you
        </Header1>
        <Header1
          upper
          mobileMedium
          tabletLarge
          primary
          setMLineHeight={1.4}
          setTLineHeight={1.4}
          setIpadLineHeight={1.4}
          setLLineHeight={1.4}
        >
          Workout
        </Header1>
        <Header1 upper mobileMedium tabletLarge secondary>
          Burn Fat
        </Header1>
        <Header1
          upper
          mobileMedium
          tabletLarge
          primary
          setMLineHeight={1.4}
          setTLineHeight={1.4}
          setIpadLineHeight={1.4}
          setLLineHeight={1.4}
        >
          Get Strong
        </Header1>
        <Header1 upper mobileMedium tabletLarge secondary>
          & Stay Fit
        </Header1>
      </ElementContainer>
      <HeadlineCopy />
    </ElementContainer>
  );
};

export default Headline1;
