import styled from "styled-components"
import { above } from "./Theme"

const ContentContainer = styled.section`
  margin-top: ${props => props.setMarginTop || "80px"};
  margin-bottom: ${props => props.setMarginBottom || "80px"};
  margin-left: 0;
  margin-right: 0;
  padding: 0;
`

const ElementContainer = styled.div`
  padding-left: ${props => {
    if (props.fullWidth) return 0
    return "16px"
  }};
  padding-right: ${props => {
    if (props.fullWidth) return 0
    return "16px"
  }};
  width: 100%;
  ${above.tablet`
    padding-left: ${props => {
      if (props.fullWidth) return 0
      return "290px"
    }};
    padding-right: ${props => {
      if (props.fullWidth) return 0
      return "290px"
    }};
  `}
`

const AppContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  border: 21px solid ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 6px;
`

export { AppContentContainer, ContentContainer, ElementContainer }
