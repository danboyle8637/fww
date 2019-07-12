import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import FWWLogo from "../../../svgs/FWWLogo";
import { above } from "../../../styles/Theme";

const DashboardHeader = () => {
  return (
    <ElementContainer justifyCenter>
      <Logo />
    </ElementContainer>
  );
};

export default DashboardHeader;

const Logo = styled(FWWLogo)`
  width: 140px;
  ${above.mobile`
    width: 220px;
  `}
`;
