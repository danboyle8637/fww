import React from "react";
import styled from "styled-components";

import { above } from "../../styles/Theme";

const BlogLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default BlogLayout;

const Layout = styled.main`
  background-color: ${props => props.theme.baseBackgroundcolor};
  width: 100%;
  max-width: 980px;
  overflow: hidden;
  ${above.tablet`
    margin-bottom: 120px;
    max-width: 900px;
  `}
  ${above.ipadPro`
    margin-bottom: 120px;
    max-width: 800px;
  `}
  ${above.laptop`
    max-width: 980px;
  `}
  ${above.ultraWide`
    margin-top: 78px;
  `}
`;
