import React from "react";
import styled from "styled-components";

const WorkoutHistoryChart = () => {
  return (
    <ChartContainer>
      <HeaderWrapper>
        <HeaderLabel>Date:</HeaderLabel>
        <HeaderLabel>Numbers:</HeaderLabel>
      </HeaderWrapper>
      <NumberGridWrapper>
        <NumberGrid>
          <TempData>7 - 10 - 19</TempData>
          <TempData>7</TempData>
        </NumberGrid>
        <NumberGrid>
          <TempData>6 - 22 - 19</TempData>
          <TempData>4</TempData>
        </NumberGrid>
        <NumberGrid>
          <TempData>6 - 2 - 19</TempData>
          <TempData>1</TempData>
        </NumberGrid>
      </NumberGridWrapper>
    </ChartContainer>
  );
};

export default WorkoutHistoryChart;

const ChartContainer = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
`;

const NumberGridWrapper = styled.div`
  margin: 12px 0 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NumberGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
`;

const HeaderLabel = styled.h4`
  margin: 0;
  padding: 0;
  justify-self: center;
  font-size: 15px;
  color: ${props => props.theme.headlinePrimary};
  text-transform: uppercase;
`;

const TempData = styled.span`
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
  justify-self: center;
  &:last-child {
    margin-bottom: 0;
  }
`;
