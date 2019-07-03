import React from "react";

import { Header3 } from "../../../../styles/Headlines";

const SecondarySubhead = ({ children }) => {
  return (
    <Header3
      primary
      mobileLarge
      setMLineHeight={1.4}
      setTLineHeight={1.4}
      setLLineHeight={1.4}
    >
      {children}
    </Header3>
  );
};

export default SecondarySubhead;
