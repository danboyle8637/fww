import styled, { css } from "styled-components";
import { setMargin } from "./Reusables";
import { above } from "../styles/Theme";

const sharedBodyText = css`
  margin: 0 0 20px 0;
  padding: 0;
  font-size: ${props => `${props.setFontSize}px` || "16px"};
  font-weight: 500;
  color: ${props => props.theme.bodyText};
  &:last-child {
    margin-bottom: 0;
  }
  ${above.mobile`
    font-size: 16px;
  `}
`;

const BodyText = styled.p`
  ${sharedBodyText}
  ${setMargin}
`;

const SetBodyText = styled.div`
  ${setMargin}
  width: 100%;
  & p {
    ${sharedBodyText}
  }
  & ul {
    margin-bottom: 0;
    padding: ${props => (props.setPadding ? "40px 0 26px 0;" : null)};
    list-style: none;
  }
  & li {
    position: relative;
    margin-bottom: ${props => props.mBottom || "30px"};
    margin-left: ${props => `${props.bulletsMarginLeft}px` || 0};
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
  & strong {
    color: ${props => props.theme.strongBodyText};
  }
  & h3 {
    font-size: 28px;
    font-weight: 600;
    color: ${props => props.theme.secondaryAccent};
  }
  & h4 {
    margin: 60px 0 20px 0;
    font-size: 22px;
    font-weight: 600;
    color: ${props => props.theme.tertiaryAccent};
  }
`;

export { BodyText, SetBodyText };
