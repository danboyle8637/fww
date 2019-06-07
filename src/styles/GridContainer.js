import styled from "styled-components"
import { flex } from "../styles/Containers"

const SectionGrid = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`

const BackgroundAsset = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  ${flex}
  z-index: 1;
`

export { SectionGrid, BackgroundAsset, ContentWrapper }
