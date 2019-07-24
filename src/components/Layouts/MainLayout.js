import React from "react";
import styled from "styled-components";

import Layout from "../layout";

const MainLayout = ({ children, location }) => {
  return (
    <Main>
      <Layout location={location}>{children}</Layout>
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
`;
