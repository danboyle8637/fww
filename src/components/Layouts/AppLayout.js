import React from "react";
import styled from "styled-components";

import { above } from "../../styles/Theme";

const AppLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default AppLayout;

const Layout = styled.main`
  margin-top: 78px;
  margin-bottom: 120px;
  background-color: ${props => props.theme.mainBackgroundColor};
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  ${above.tablet`
  `}
  ${above.ipadPro`
    border: 21px solid ${props => props.theme.mainBackgroundBorderColor};
    border-radius: 20px;
  `}
  ${above.laptop`
    
  `}
`;
