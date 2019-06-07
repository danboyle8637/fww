import styled, { css } from "styled-components"

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
`

const Headline1 = styled.h1`
  ${baseHeadline}
`

const Headline2 = styled.h2`
  ${baseHeadline}
`

const Headline3 = styled.h3`
  ${baseHeadline}
`

export { Headline1, Headline2, Headline3 }
