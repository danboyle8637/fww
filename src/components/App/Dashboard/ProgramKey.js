import React from "react";
import styled from "styled-components";

const ProgramKey = ({ children, active }) => {
  return <KeyItem active={active}>{children}</KeyItem>;
};

export default ProgramKey;

const KeyItem = styled.p`
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
  &::before {
    position: absolute;
    top: 50%;
    left: -16%;
    content: "";
    width: 20px;
    height: 20px;
    border: 3px solid #0e0e0f;
    border-radius: 50%;
    background: ${props =>
      props.active ? props.theme.primaryAccent : "transparent"};
    transform: translateY(-50%);
  }
`;
