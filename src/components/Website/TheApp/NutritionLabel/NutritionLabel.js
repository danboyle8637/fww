import React from "react";
import styled from "styled-components";

import CaloriesRow from "./CaloriesRow";
import IngredientRow from "./IngredientRow";
import { above } from "../../../../styles/Theme";

const NutritionLabel = ({ nutrition }) => {
  return (
    <NutritionLabelContainer>
      <BigFoodLabel>Nutrition Facts</BigFoodLabel>
      <LabelGroup>
        <SmallFoodLabel>Servings</SmallFoodLabel>
        <SmallFoodLabel>{nutrition.servings}</SmallFoodLabel>
      </LabelGroup>
      <BoldDividerLine />
      <SmallFoodLabel>Amount per serving</SmallFoodLabel>
      <CaloriesRow calories={nutrition.calories} />
      <MedDividerLine />
      <SmallFoodLabel right>% Daily Value</SmallFoodLabel>
      <ThinDividerLine />
      <IngredientRow
        ingredient={"Total Fat"}
        amount={nutrition.totalFat}
        percent={nutrition.totalFatPercent}
      />
      <ThinDividerLine />
      <IngredientRow
        ingredient={"Total Carbohydrate"}
        amount={nutrition.carbohydrate}
        percent={nutrition.carbohydratePercent}
      />
      <ThinDividerLine />
      <IngredientRow
        indent
        ingredient={"Dietary Fiber"}
        amount={nutrition.dietaryFiber}
        percent={nutrition.dietaryFiberPercent}
      />
      <ThinDividerLine />
      <IngredientRow
        indent
        ingredient={"Total Sugars"}
        amount={nutrition.sugar}
        percent={"-"}
      />
      <ThinDividerLine />
      <IngredientRow
        ingredient={"Protein"}
        amount={nutrition.protein}
        percent={"-"}
      />
    </NutritionLabelContainer>
  );
};

export default NutritionLabel;

const NutritionLabelContainer = styled.div`
  margin: 0 16px;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: 2px;
  width: 100%;
  background: rgba(25, 25, 28, 0.8);
  border-radius: 8px;
  ${above.mobile`
    row-gap: 4px;
    width: 22rem;
  `}
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

const SmallFoodLabel = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: ${props => props.theme.bodyText};
  justify-self: ${props => (props.right ? "end" : "start")};
  ${above.mobile`
    font-size: 16px;
  `}
`;

const LabelGroup = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: center;
`;

const BoldDividerLine = styled.div`
  margin: 3px 0;
  background: ${props => props.theme.footerAddressText};
  border-radius: 2px;
  width: 100%;
  height: 6px;
`;

const MedDividerLine = styled.div`
  margin: 3px 0;
  background: ${props => props.theme.footerAddressText};
  width: 100%;
  height: 2px;
`;

const ThinDividerLine = styled.div`
  margin: 3px 0;
  background: ${props => props.theme.footerAddressText};
  width: 100%;
  height: 1px;
`;
