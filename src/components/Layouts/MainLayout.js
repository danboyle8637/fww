import React from "react"
import styled from "styled-components"

import Layout from "../layout"
import { above } from "../../styles/Theme"
// MainLayout wraps the whole window and centers the
// ContentLayout.

const MainLayout = ({ children }) => (
  <Main>
    <Layout>{children}</Layout>
  </Main>
)

export default MainLayout

const Main = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  ${above.ultraWide`
    margin: 80px 0 0 0;
  `}
`
