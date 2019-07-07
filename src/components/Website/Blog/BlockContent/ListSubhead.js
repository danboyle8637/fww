import React from "react";

import { BlogContainer } from "../../../../styles/Containers";
import { Header4 } from "../../../../styles/Headlines";

const ListSubhead = ({ children }) => {
  return (
    <BlogContainer setMobileMarginTop={60} setMobileMarginBottom={30}>
      <Header4
        secondary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        {children}
      </Header4>
    </BlogContainer>
  );
};

export default ListSubhead;
