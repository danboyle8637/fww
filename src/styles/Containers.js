import styled, { css } from "styled-components"

import { above, headlineWidths } from "./Theme"

/******  ******/

const setMarginTop = css`
  margin-top: ${props => `${props.setMobileMarginTop}px` || 0};
  margin-bottom: ${props => `${props.setMobileMarginBottom}px` || 0};
  ${above.mobile`
    margin-top: ${props => `${props.setTabletMarginTop}px` || 0};
    margin-bottom: ${props => `${props.setTabletMarginBottom}px` || 0};
  `}
  ${above.laptop`
    margin-top: ${props => `${props.setLaptopMarginTop}px` || 0};
    margin-bottom: ${props => `${props.setLaptopMarginBottom}px` || 0};
  `}
`

const setWidth = css`
  width: ${props => `${props.setMobileWidth}px` || "100%"};
  ${above.mobile`
    width: ${props => `${props.setTabletWidth}px` || "100%"};
  `}
  ${above.tablet`
    width: ${props => `${props.setLaptopWidth}px` || "100%"};
  `}
`

const moveHeadline = x => `translateX(${x}px)`

const moveX = css`
  transform: ${props => moveHeadline(props.moveMobileX)};
  ${above.mobile`
    transform: ${props => moveHeadline(props.moveTabletX)};
  `}
  ${above.tablet`
    transform: ${props => moveHeadline(props.moveLaptopX)};
  `}
`

const flex = css`
  display: flex;
  flex-wrap: ${props => {
    if (props.wrapReverse) return "wrap-reverse"
    else if (props.noWrap) return "nowrap"
    return "wrap"
  }};
  justify-content: ${props => {
    if (props.justifyContent) return props.justifyContent
    if (props.justifyCenter) return "center"
    else if (props.justifyAround) return "space-around"
    else if (props.justifyBetween) return "space-between"
    else if (props.justifyEnd) return "flex-end"
    return "flex-start"
  }};
  align-items: ${props => {
    if (props.alignItems) return props.alignItems
    else if (props.alignStretch) return "stretch"
    else if (props.alignEnd) return "flex-end"
    if (props.alignCenter) return "center"
    else if (props.alignBaseline) return "baseline"
    return "flex-start"
  }};
  align-content: ${props => {
    if (props.alignContent) return props.content
    else if (props.contentStart) return "flex-start"
    else if (props.contentEnd) return "flex-end"
    else if (props.contentCenter) return "center"
    else if (props.contentBetween) return "space-between"
    else if (props.contentAround) return "contentAround"
    return "stretch"
  }};
  flex-direction: ${props => (props.column ? "column" : "row")};
`

/******  ******/

const SectionContainer = styled.section`
  margin-top: ${props => props.setMarginTop || "5rem"};
  margin-bottom: ${props => props.setMarginBottom || "5rem"};
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${props => {
    if (props.fullWidth) return 0
    return "1rem"
  }};
  padding-right: ${props => {
    if (props.fullWidth) return 0
    return "1rem"
  }};
  width: 100%;
  ${above.tablet`
    max-width: ${headlineWidths.laptop};
  `}
`

const HeadlineContainer = styled.div`
  width: ${headlineWidths.mobile};
  ${above.mobile`
    max-width: ${headlineWidths.tablet};
  `}
  ${above.tablet`
    max-width: ${headlineWidths.laptop};
  `}
`

const ElementContainer = styled.div`
  ${setMarginTop}
  ${flex}
  ${setWidth}
  ${moveX}
`

const AppContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  border: 21px solid ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 6px;
`

export {
  AppContentContainer,
  ContentContainer,
  ElementContainer,
  SectionContainer,
  flex,
  HeadlineContainer,
}
