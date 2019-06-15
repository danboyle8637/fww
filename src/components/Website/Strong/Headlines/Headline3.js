import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";
import StrongLogo from "../../../../svgs/StrongLogo";
import { above } from "../../../../styles/Theme";

const Headline3 = () => {
  return (
    <ElementContainer column>
      <Header3 upper primary mobileLarge setMLineHeight={1.4}>
        Part 2:
      </Header3>
      <Logo />
      <Header3 tertiary mobileMedium setMLineHeight={1.4}>
        Workouts
      </Header3>
    </ElementContainer>
  );
};

export default Headline3;

const Logo = styled(StrongLogo)`
  width: 330px;
  ${above.mobile`
    width: 480px;
  `}
`;
