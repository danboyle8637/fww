import React from "react";
import styled from "styled-components";

const WeekCalendar = () => {
  const weekArray = [0, 1, 2, 3, 4, 5, 6];

  return (
    <CalendarContainer>
      <Day>S</Day>
      <Day>M</Day>
      <Day>T</Day>
      <Day>W</Day>
      <Day>T</Day>
      <Day>F</Day>
      <Day>S</Day>
    </CalendarContainer>
  );
};

export default WeekCalendar;

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const Day = styled.div`
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 6px;
`;
