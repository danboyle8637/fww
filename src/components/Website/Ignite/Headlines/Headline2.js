import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";
import IgniteLogo from "../../../../svgs/IgniteLogo";
import { above } from "../../../../styles/Theme";

const Headline2 = () => {
  return (
    <ElementContainer
      column
      setTabletWidth={"400px"}
      setIpadProWidth={"500px"}
      setLaptopWidth={"400px"}
    >
      <HeadlineWrapper>
        <Header3 tertiary mobileMedium laptopLarge>
          Get the
        </Header3>
        <Header3
          tertiary
          mobileMedium
          laptopLarge
          setMLineHeight={1.4}
          setTLineHeight={1.4}
          setIpadLineHeight={1.4}
          setLLineHeight={1.4}
        >
          facts about
        </Header3>
      </HeadlineWrapper>
      <Logo />
    </ElementContainer>
  );
};

export default Headline2;

const HeadlineWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translate(-100px, 20px) rotate(-7deg);
  ${above.mobile`
    transform: translate(-120px, 20px) rotate(-7deg);
  `}
  ${above.tablet`
    transform: translate(-220px, 30px) rotate(-7deg);
  `}
  ${above.ipadPro`
    transform: translate(-40px, 30px) rotate(-7deg);
  `}
`;

const Logo = styled(IgniteLogo)`
  width: 90%;
`;
