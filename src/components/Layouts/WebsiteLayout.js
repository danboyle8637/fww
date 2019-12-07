import React from "react";
import styled from "styled-components";

import { above } from "../../styles/Theme";

const WebsiteLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default WebsiteLayout;

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.mainBackgroundColor};
  width: 100%;
  max-width: 1440px;
  overflow: hidden;
  ${above.laptop`
    border: 21px solid ${props => props.theme.mainBackgroundBorderColor};
    border-radius: 20px;
  `}
  ${above.ultraWide`
    margin-top: 78px;
    margin-bottom: 120px;
  `}
`;
