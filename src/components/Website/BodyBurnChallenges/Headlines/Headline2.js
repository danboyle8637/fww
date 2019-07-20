import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";
import BBCLogo from "../../../../svgs/BodyBurnChallengesLogo";
import { above } from "../../../../styles/Theme";

const Headline2 = () => {
  return (
    <ElementContainer>
      <Header3
        tertiary
        mobileMedium
        setMLineHeight={1.6}
        setTLineHeight={1.8}
        setIpadLineHeight={1.8}
        setLLineHeight={1.8}
      >
        Get the facts about:
      </Header3>
      <Logo />
    </ElementContainer>
  );
};

export default Headline2;

const Logo = styled(BBCLogo)`
  width: 100%;
  ${above.mobile`
    max-width: 38rem;
  `}
`;
