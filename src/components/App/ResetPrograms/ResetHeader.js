import React from "react";
import styled from "styled-components";

import BodyBurnResetLogo from "../../../svgs/BodyBurnResetLogo";
// import IgniteResetLogo from "../../../svgs/IgniteResetLogo";
// import StrongResetLogo from "../../../svgs/StrongResetLogo";

const ResetHeader = () => {
  return (
    <HeaderContainer>
      <BBCLogo />
    </HeaderContainer>
  );
};

export default ResetHeader;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BBCLogo = styled(BodyBurnResetLogo)`
  width: 240px;
`;

// const IgniteLogo = styled(IgniteResetLogo)`
//   width: 180px;
// `;

// const StrongLogo = styled(StrongResetLogo)`
//   width: 180px;
// `;
