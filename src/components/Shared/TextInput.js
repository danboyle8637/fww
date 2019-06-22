import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../styles/Containers";

const TextInput = () => {
  return (
    <ElementContainer>
      <InputContainer>
        <InputLabel>
          First name:
          <Input />
        </InputLabel>
      </InputContainer>
    </ElementContainer>
  );
};

export default TextInput;

const InputContainer = styled.div`
  margin: 0;
  padding: 12px;
  background: ${props => props.theme.accentBackgroundColor};
  border-radius: 6px;
`;

const InputLabel = styled.label`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: ${props => props.theme.whiteText};
  text-transform: uppercase;
`;

const Input = styled.input`
  margin: 0;
  padding: 8px;
  background: ${props => props.theme.mainBackgroundColor};
  border-radius: 6px;
  font-size: 18px;
  color: ${props => props.theme.bodyText};
`;
