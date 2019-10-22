import React from "react";
import styled from "styled-components";

import Timer from "../../Shared/CountdownTimer";
import { InnerButton } from "../../../styles/Buttons";

const AppCountdownTimer = () => {
  return (
    <TimerContainer>
      <TimerWrapper>
        <Timer endDate={"1/01/2020 12:00 AM"} />
      </TimerWrapper>
    </TimerContainer>
  );
};

export default AppCountdownTimer;

const TimerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 18px;
  width: 100%;
`;

const TimerWrapper = styled.div`
  padding: 12px;
  background: #1b1c2a;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 3px 4px 0px rgba(0, 0, 0, 0.4);
`;
