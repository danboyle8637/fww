import React from "react";
import styled from "styled-components";

import CaloriesRow from "./CaloriesRow";
import IngredientRow from "./IngredientRow";
import { above } from "../../../../styles/Theme";

const NutritionLabel = () => {
  return (
    <NutritionLabelContainer>
      <BigFoodLabel>Nutrition Facts</BigFoodLabel>
      <LabelGroup>
        <SmallFoodLabel>Servings</SmallFoodLabel>
        <SmallFoodLabel>1</SmallFoodLabel>
      </LabelGroup>
      <BoldDividerLine />
      <SmallFoodLabel>Amount per serving</SmallFoodLabel>
      <CaloriesRow />
      <MedDividerLine />
      <SmallFoodLabel right>% Daily Value</SmallFoodLabel>
      <ThinDividerLine />
      <IngredientRow ingredient={"Total Fat"} amount={23} percent={23} />
      <ThinDividerLine />
      <IngredientRow
        indent
        ingredient={"Saturated Fat"}
        amount={23}
        percent={23}
      />
      <ThinDividerLine />
      <IngredientRow ingredient={"Cholesterol"} amount={23} percent={23} />
      <ThinDividerLine />
      <IngredientRow ingredient={"Sodium"} amount={23} percent={23} />
      <ThinDividerLine />
      <IngredientRow
        ingredient={"Total Carbohydrate"}
        amount={23}
        percent={23}
      />
      <ThinDividerLine />
      <IngredientRow
        indent
        ingredient={"Dietary Fiber"}
        amount={23}
        percent={23}
      />
      <ThinDividerLine />
      <IngredientRow
        indent
        ingredient={"Total Sugars"}
        amount={23}
        percent={23}
      />
      <ThinDividerLine />
      <IngredientRow ingredient={"Protein"} amount={23} percent={23} />
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
  max-width: 22rem;
  background: rgba(25, 25, 28, 0.8);
  border-radius: 8px;
  ${above.mobile`
    row-gap: 4px;
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
