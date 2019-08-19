import React from "react";

import { ElementContainer } from "../../../styles/Containers";
import { Header1 } from "../../../styles/Headlines";

const Headline = ({ text }) => {
  return (
    <ElementContainer>
      <Header1 upper mobileMedium primary>
        {text}
      </Header1>
    </ElementContainer>
  );
};

export default Headline;
