import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Layout from "../layout";
import { above } from "../../styles/Theme";
// MainLayout wraps the whole window and centers the
// ContentLayout.

const MainLayout = ({ children, location }) => {
  const [isBlogPage, setIsBlogPage] = useState(false);

  useEffect(() => {
    const pathName = location.pathname;

    if (pathName.includes("blog")) {
      setIsBlogPage(true);
    } else {
      setIsBlogPage(false);
    }
  }, [location.pathname]);

  return (
    <Main isBlogPage={isBlogPage}>
      <Layout isBlogPage={isBlogPage}>{children}</Layout>
    </Main>
  );
};

export default MainLayout;

const Main = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  ${above.tablet`
    margin: ${props => (props.isBlogPage ? "78px 0 0 0" : "0")};
  `}
  ${above.ultraWide`
    margin: 78px 0 0 0;
  `}
`;
