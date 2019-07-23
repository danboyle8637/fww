import styled, { css } from "styled-components";
import { above } from "../styles/Theme";

const baseHeadline = css`
  margin: 0;
  padding: 0;
  font-size: ${props =>
    props.mobileLarge
      ? "52px"
      : props.mobileMedium
      ? "32px"
      : props.mobileSmall && "22px"};
  color: ${props =>
    props.primary
      ? props.theme.headlinePrimary
      : props.secondary
      ? props.theme.headlineSecondary
      : props.tertiary && props.theme.bodyText};
  font-weight: 800;
  line-height: ${props => props.setMLineHeight || 1.0};
  text-transform: ${props => (props.upper ? "uppercase" : "none")};
  ${above.mobile`
    font-size: ${props =>
      props.tabletLarge
        ? "52px"
        : props.tabletMedium
        ? "32px"
        : props.tabletSmall && "22px"};
    line-height: ${props => props.setTLineHeight || 1.0};
  `}
  ${above.tablet`
    font-size: ${props =>
      props.ipadProLarge
        ? "52px"
        : props.ipadProMedium
        ? "32px"
        : props.ipadProSmall && "22px"};
    line-height: ${props => props.setIpadLineHeight || 1.0};
  `}
  ${above.ipadPro`
    font-size: ${props =>
      props.laptopLarge
        ? "52px"
        : props.laptopMedium
        ? "32px"
        : props.laptopSmall && "22px"};
    line-height: ${props => props.setLLineHeight || 1.0};
  `}
  ${above.laptop`
    font-size: ${props =>
      props.ultraWideLarge
        ? "52px"
        : props.ultraWideMedium
        ? "32px"
        : props.ultraWideSmall && "22px"};
    line-height: ${props => props.setUWLineHeight || 1.0};
  `}
`;

const Header1 = styled.h1`
  ${baseHeadline}
`;

const Header2 = styled.h2`
  ${baseHeadline}
`;

const Header3 = styled.h3`
  ${baseHeadline}
`;

const Header4 = styled.h4`
  ${baseHeadline}
`;

export { Header1, Header2, Header3, Header4 };
