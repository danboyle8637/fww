import React from "react";
import styled from "styled-components";

import { above } from "../../../../styles/Theme";

const CaloriesRow = () => {
  return (
    <CalorieRowContainer>
      <BigFoodLabel>Calories</BigFoodLabel>
      <BigFoodLabel>876g</BigFoodLabel>
    </CalorieRowContainer>
  );
};

export default CaloriesRow;

const CalorieRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BigFoodLabel = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  color: ${props => props.theme.bodyText};
  ${above.mobile`
    font-size: 26px;
  `}
`;
