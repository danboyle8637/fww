import React from "react"
import styled from "styled-components"

import Layout from "../layout"
// MainLayout wraps the whole window and centers the
// ContentLayout.

const MainLayout = ({ children }) => (
  <Main>
    <Layout>{children}</Layout>
  </Main>
)

export default MainLayout

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`
