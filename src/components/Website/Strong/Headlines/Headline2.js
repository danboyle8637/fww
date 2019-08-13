import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";
import KettlebellClinicLogo from "../../../../svgs/KettlebellClinicLogo";
import { above } from "../../../../styles/Theme";

const Headline2 = () => {
  return (
    <ElementContainer column moveIpadProX={-100}>
      <ElementContainer
        moveMobileX={75}
        moveTabletX={112}
        moveIpadProX={126}
        moveLaptopX={137}
      >
        <Header3
          upper
          primary
          mobileLarge
          setMLineHeight={1.4}
          setTLineHeight={1.4}
          setIpadLineHeight={1.4}
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
  transform: translateY(-34px);
  ${above.mobile`
    width: 440px;
    transform: translateY(-44px);
  `}
  ${above.tablet`
    width: 500px;
    transform: translateY(-54px);
  `}
  ${above.ipadPro`
    width: 540px;
  `}
`;
