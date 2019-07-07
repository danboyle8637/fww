import React from "react";

import { BlogContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";

const PrimarySubhead = ({ children }) => {
  return (
    <BlogContainer setMobileMarginTop={80}>
      <Header3
        tertiary
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

export default PrimarySubhead;
