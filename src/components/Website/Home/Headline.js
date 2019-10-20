import React from "react";

import { Header1 } from "../../../styles/Headlines";
import { ElementContainer } from "../../../styles/Containers";

const Headline = () => {
  return (
    <ElementContainer
      setMobileWidth={"220px"}
      setTabletWidth={"360px"}
      setIpadProWidth={"400px"}
      setLaptopWidth={"600px"}
      setTabletMarginTop={20}
      setLaptopMarginTop={20}
      moveMobileX={10}
    >
      <Header1
        primary
        mobileSmall
        tabletMedium
        laptopMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        We help busy women build a consistent workout habit and learn healthy -
        real world - meal planning.
      </Header1>
    </ElementContainer>
  );
};

export default Headline;
