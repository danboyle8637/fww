import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const CardHeadline = ({ headline }) => {
  return (
    <ElementContainer>
      <Header3
        primary
        mobileSmall
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        {headline}
      </Header3>
    </ElementContainer>
  );
};

export default CardHeadline;
