import styled, { css } from "styled-components"

const sharedBodyText = css`
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
  &:last-child {
    margin-bottom: 0;
  }
`

const BodyText = styled.p`
  ${sharedBodyText}
`

const SetBodyText = styled.div`
  width: 100%;
  & p {
    ${sharedBodyText}
  }
  & ul {
    list-style: none;
  }
  & li {
    position: relative;
    margin-bottom: ${props => props.mBottom || "20px"};
    color: ${props => props.theme.bodyText};
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      background: ${props =>
        props.accent ? props.theme.secondaryAccent : props.theme.primaryAccent};
      border-radius: 50%;
      width: 12px;
      height: 12px;
      transform: translate(-180%, 70%);
    }
  }
  & a {
    color: ${props => props.theme.primaryAccent};
    text-decoration: none;
    cursor: pointer;
  }
`

export { BodyText, SetBodyText }
