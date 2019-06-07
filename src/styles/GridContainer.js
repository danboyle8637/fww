import styled from "styled-components"

const SectionGrid = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`

const BackgroundAsset = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: ${props => props.width};
`

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`

export { SectionGrid, BackgroundAsset, ContentWrapper }
