import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";
import StrongLogo from "../../../../svgs/StrongLogo";
import { above } from "../../../../styles/Theme";

const Headline3 = () => {
  return (
    <ElementContainer column moveIpadProX={-160}>
      <Header3 upper primary mobileLarge>
        Part 2:
      </Header3>
      <Logo />
      <WorkoutsWrapper>
        <Header3 tertiary mobileMedium>
          Workouts
        </Header3>
      </WorkoutsWrapper>
    </ElementContainer>
  );
};

export default Headline3;

const WorkoutsWrapper = styled.div`
  ${above.mobile`
    transform: translateY(-40px);
  `}
  ${above.ipadPro`
    transform: translateY(-50px);
  `}
`;

const Logo = styled(StrongLogo)`
  width: 330px;
  ${above.mobile`
    width: 480px;
    transform: translateY(-30px);
  `}
  ${above.tablet`
    width: 540px;
    transform: translateY(-35px);
  `}
`;
