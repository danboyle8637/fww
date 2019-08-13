import React from "react";
import styled from "styled-components";

import { above } from "../../../../styles/Theme";

const IngredientRow = ({ ingredient, amount, percent, indent }) => {
  return (
    <IngredientRowContainer>
      <IngredientGroup indent={indent}>
        <IngredientLabel>{ingredient}</IngredientLabel>
        <IngredientLabel>{amount}g</IngredientLabel>
      </IngredientGroup>
      <IngredientLabel>{percent}%</IngredientLabel>
    </IngredientRowContainer>
  );
};

export default IngredientRow;

const IngredientRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IngredientGroup = styled.div`
  margin-left: ${props => (props.indent ? "20px" : 0)};
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: center;
`;

const IngredientLabel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: ${props => props.theme.bodyText};
  ${above.mobile`
    font-size: 14px;
  `}
`;
