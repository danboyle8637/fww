import React from "react";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const CardHeadline = ({ headline }) => {
  return (
    <ElementContainer>
      <Header3 primary mobileSmall>
        {headline}
      </Header3>
    </ElementContainer>
  );
};

export default CardHeadline;
