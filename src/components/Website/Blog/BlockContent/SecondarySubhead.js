import React from "react";

import { BlogContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const SecondarySubhead = ({ children }) => {
  return (
    <BlogContainer setMobileMarginTop={60} setMobileMarginBottom={40}>
      <Header3
        primary
        mobileLarge
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        {children}
      </Header3>
    </BlogContainer>
  );
};

export default SecondarySubhead;
