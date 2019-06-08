import styled from "styled-components"
import { flex } from "../styles/Containers"
import { above } from "../styles/Theme"

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

const ContentContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  width: 100%;
  ${flex}
  z-index: 1;
`

const HeadlineContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  ${flex}
  width: 100%;
  z-index: 1;
  ${above.mobile`
    max-width: 34rem;
  `}
  ${above.tablet`
    max-width: 54rem;
  `}
`

export { SectionGrid, BackgroundAsset, ContentContainer, HeadlineContainer }
