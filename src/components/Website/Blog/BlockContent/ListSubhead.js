import React from "react";

import { Header4 } from "../../../../styles/Headlines";

const ListSubhead = ({ children }) => {
  return (
    <Header4
      secondary
      mobileMedium
      setMLineHeight={1.4}
      setTLineHeight={1.4}
      setLLineHeight={1.4}
    >
      {children}
    </Header4>
  );
};

export default ListSubhead;
