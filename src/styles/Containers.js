import styled, { css } from "styled-components";

import { above, headlineWidths } from "./Theme";

/******  ******/

const setMargin = css`
  margin-top: ${props => `${props.setMobileMarginTop}px` || 0};
  margin-bottom: ${props => `${props.setMobileMarginBottom}px` || 0};
  ${above.mobile`
    margin-top: ${props => `${props.setTabletMarginTop}px` || 0};
    margin-bottom: ${props => `${props.setTabletMarginBottom}px` || 0};
  `}
  ${above.tablet`
    margin-top: ${props => `${props.setIPadProMarginTop}px` || 0};
    margin-bottom: ${props => `${props.setIPadProMarginBottom}px` || 0};
  `}
  ${above.ipadPro`
    margin-top: ${props => `${props.setLaptopMarginTop}px` || 0};
    margin-bottom: ${props => `${props.setLaptopMarginBottom}px` || 0};
  `}
  ${above.laptop`
    margin-top: ${props => `${props.setWideScreenMarginTop}px` || 0};
    margin-bottom: ${props => `${props.setWideScreenMarginBottom}px` || 0};
  `}
`;

const setWidth = css`
  width: ${props => props.setMobileWidth || "100%"};
  ${above.mobile`
    width: ${props => props.setTabletWidth || "100%"};
  `}
  ${above.tablet`
    width: ${props => props.setIpadProWidth || "100%"};
  `}
  ${above.ipadPro`
    width: ${props => props.setLaptopWidth || "100%"};
  `}
`;

const moveHeadline = x => `translateX(${x}px)`;

const moveX = css`
  transform: ${props => moveHeadline(props.moveMobileX)};
  ${above.mobile`
    transform: ${props => moveHeadline(props.moveTabletX)};
  `}
  ${above.tablet`
    transform: ${props => moveHeadline(props.moveIpadProX)};
  `}
  ${above.ipadPro`
    transform: ${props => moveHeadline(props.moveLaptopX)};
  `}
`;

const flex = css`
  display: flex;
  flex-wrap: ${props => {
    if (props.wrapReverse) return "wrap-reverse";
    else if (props.noWrap) return "nowrap";
    return "wrap";
  }};
  justify-content: ${props => {
    if (props.justifyContent) return props.justifyContent;
    if (props.justifyCenter) return "center";
    else if (props.justifyAround) return "space-around";
    else if (props.justifyBetween) return "space-between";
    else if (props.justifyEnd) return "flex-end";
    return "flex-start";
  }};
  align-items: ${props => {
    if (props.alignItems) return props.alignItems;
    else if (props.alignStretch) return "stretch";
    else if (props.alignEnd) return "flex-end";
    if (props.alignCenter) return "center";
    else if (props.alignBaseline) return "baseline";
    return "flex-start";
  }};
  align-content: ${props => {
    if (props.alignContent) return props.content;
    else if (props.contentStart) return "flex-start";
    else if (props.contentEnd) return "flex-end";
    else if (props.contentCenter) return "center";
    else if (props.contentBetween) return "space-between";
    else if (props.contentAround) return "contentAround";
    return "stretch";
  }};
  flex-direction: ${props => (props.column ? "column" : "row")};
`;

const positionSelf = css`
  align-self: ${props => {
    if (props.alignSelfCenter) return "center";
    else if (props.alignSelfRight) return "flex-end";
    return "flex-start";
  }};
`;

/******  ******/

const SectionContainer = styled.section`
  margin-top: ${props => props.setMobileMarginTop || "5rem"};
  margin-bottom: ${props => props.setMobileMarginBottom || "5rem"};
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${above.mobile`
    margin-top: ${props => props.setTabletMarginTop || "7.5rem"};
    margin-bottom: ${props => props.setTabletMarginBottom || "7.5rem"};
  `}
  ${above.tablet`
    margin-top: ${props => props.setIpadProMarginTop || "7.5rem"};
    margin-bottom: ${props => props.setIpadProMarginBottom || "7.5rem"};
  `}
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${props => {
    if (props.fullWidth) return 0;
    return "1rem";
  }};
  padding-right: ${props => {
    if (props.fullWidth) return 0;
    return "1rem";
  }};
  width: ${headlineWidths.mobile};
  ${above.mobile`
    max-width: ${headlineWidths.tablet};
  `}
  ${above.tablet`
    max-width: ${headlineWidths.laptop};
  `}
`;

const HeadlineContainer = styled.div`
  ${setMargin}
  width: ${headlineWidths.mobile};
  ${above.mobile`
    max-width: ${headlineWidths.tablet};
  `}
  ${above.tablet`
    max-width: ${headlineWidths.laptop};
  `}
`;

const ElementContainer = styled.div`
  ${setMargin}
  ${flex}
  ${positionSelf}
  ${setWidth}
  ${moveX}
`;

const AppContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  ${above.tablet`
    width: 80%;
  `}
  ${above.ipadPro`
    width: 100%;
  `}
`;

const BlogContainer = styled.div`
  ${setMargin}
  padding: 0 16px;
  ${above.mobile`
    padding: 0 40px;
  `}
`;

export {
  ContentContainer,
  ElementContainer,
  SectionContainer,
  flex,
  HeadlineContainer,
  BlogContainer,
  AppContentContainer,
};
