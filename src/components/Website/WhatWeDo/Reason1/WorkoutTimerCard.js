import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";
import { BodyText } from "../../../../styles/BodyText";
import WorkoutTimerIcon from "../../../../svgs/WorkoutTimerIcon";

const WorkoutTimerCard = ({ timerId, headline, body }) => {
  return (
    <TimerContainer>
      <WorkoutTimer timerId={timerId} />
      <ElementContainer>
        <Header3 secondary mobileSmall>
          {headline}
        </Header3>
        <BodyText setMobileMarginTop={12}>{body}</BodyText>
      </ElementContainer>
    </TimerContainer>
  );
};

export default WorkoutTimerCard;

const TimerContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  justify-items: start;
  align-items: start;
`;

const WorkoutTimer = styled(WorkoutTimerIcon)`
  width: 80px;
`;
