import React from "react";

import { Header1 } from "../../../styles/Headlines";
import { ElementContainer } from "../../../styles/Containers";

const Headline = () => {
  return (
    <ElementContainer
      setMobileMarginTop={12}
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
        We help busy women get workouts done… get fit… and get back to life.
      </Header1>
    </ElementContainer>
  );
};

export default Headline;
