import styled, { css } from "styled-components"
import { above } from "../styles/Theme"

const baseHeadline = css`
  margin: 0;
  padding: 0;
  font-size: ${props =>
    props.large ? "52px" : props.medium ? "32px" : props.small && "22px"};
  color: ${props =>
    props.primary
      ? props.theme.headlinePrimary
      : props.secondary && props.theme.headlineSecondary};
  font-weight: 800;
  line-height: 1.4;
  text-transform: ${props => (props.upper ? "uppercase" : "none")};
  ${above.mobile`
    font-size: 32px;
  `}
`

const Header1 = styled.h1`
  ${baseHeadline}
`

const Header2 = styled.h2`
  ${baseHeadline}
`

const Header3 = styled.h3`
  ${baseHeadline}
`

export { Header1, Header2, Header3 }
