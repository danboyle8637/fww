import React from "react";

import { Header3 } from "../../../../styles/Headlines";

const PrimarySubhead = ({ children }) => {
  return (
    <Header3
      tertiary
      mobileLarge
      setMLineHeight={1.4}
      setTLineHeight={1.4}
      setLLineHeight={1.4}
    >
      {children}
    </Header3>
  );
};

export default PrimarySubhead;
