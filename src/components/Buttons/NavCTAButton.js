import React from "react";
import styled from "styled-components";

import NavCTAButtonTransition from "../../Animations/ReactTransitions/NavCTAButtonTransition";
import { useMenuContext } from "../../context/MenuContext";
import { above } from "../../styles/Theme";

const NavCTAButton = ({ children, handleClick }) => {
  // eslint-disable-next-line
  const [menuState, dispatchMenuAction] = useMenuContext();

  return (
    <NavCTAButtonTransition menuOpen={menuState.isOpen}>
      <ButtonContainer onClick={handleClick}>{children}</ButtonContainer>
    </NavCTAButtonTransition>
  );
};

export default NavCTAButton;

const ButtonContainer = styled.button`
  margin: 0;
  padding: 4px 20px;
  grid-column: 2;
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.primaryAccent};
  border: none;
  border-radius: 8px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${props => props.theme.baseBackgroundColor};
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.tertiaryAccent};
  }
  ${above.mobile`
    font-size: 15px;
  `}
  ${above.ipadPro`
    &:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
        props.theme.tertiaryAccent};
    }
  `}
`;
