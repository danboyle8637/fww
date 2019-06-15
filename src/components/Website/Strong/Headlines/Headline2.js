import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";
import KettlebellClinicLogo from "../../../../svgs/KettlebellClinicLogo";
import { above } from "../../../../styles/Theme";

const Headline2 = () => {
  return (
    <ElementContainer column>
      <ElementContainer moveTabletX={124}>
        <Header3
          upper
          primary
          mobileLarge
          setMLineHeight={1.4}
          setTLineHeight={1.4}
          setLLineHeight={1.4}
        >
          Part 1:
        </Header3>
      </ElementContainer>
      <ClinicLogo />
    </ElementContainer>
  );
};

export default Headline2;

const ClinicLogo = styled(KettlebellClinicLogo)`
  width: 300px;
  ${above.mobile`
    width: 500px;
  `}
`;
