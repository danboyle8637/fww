import React from "react";
import styled from "styled-components";

import { above } from "../../styles/Theme";

const BaseButton = ({ children, linkLocation }) => {
  return (
    <ButtonContainer
      href={linkLocation}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </ButtonContainer>
  );
};

export default BaseButton;

const ButtonContainer = styled.a`
  margin: 0;
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.primaryAccent};
  border: none;
  border-radius: 6px;
  text-decoration: none;
  color: ${props => props.theme.mainBackgroundColor};
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  width: 100%;
  max-width: 600px;
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.tertiaryAccent};
  }
  ${above.ipadPro`
    &:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
        props.theme.tertiaryAccent};
    }
  `}
`;
