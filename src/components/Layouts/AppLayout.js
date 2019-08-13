import React from "react";
import styled from "styled-components";

import { above } from "../../styles/Theme";

const AppLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default AppLayout;

const Layout = styled.main`
  background-color: ${props => props.theme.mainBackgroundColor};
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  ${above.tablet`
  `}
  ${above.ipadPro`
    margin-top: 78px;
    margin-bottom: 120px;
    border: 21px solid ${props => props.theme.mainBackgroundBorderColor};
    border-radius: 20px;
  `}
  ${above.laptop`
    
  `}
  ${above.ultraWide`
    margin-bottom: 200px;
  `}
`;

//
// margin-bottom: 120px;
