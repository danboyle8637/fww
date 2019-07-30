import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { Header3 } from "../../../../styles/Headlines";
import { SetBodyText } from "../../../../styles/BodyText";
import WorkoutTimerIcon from "../../../../svgs/WorkoutTimerIcon";
import { above } from "../../../../styles/Theme";

const WorkoutTimerCard = ({ timerId, headline, body }) => {
  return (
    <TimerContainer>
      <WorkoutTimer timerId={timerId} />
      <ElementContainer>
        <Header3
          secondary
          mobileSmall
          setMLineHeight={1.4}
          setTLineHeight={1.4}
          setIpadLineHeight={1.4}
          setLLineHeight={1.4}
        >
          {headline}
        </Header3>
        <SetBodyText
          setMobileMarginTop={12}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </ElementContainer>
    </TimerContainer>
  );
};

export default WorkoutTimerCard;

const TimerContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  justify-items: start;
  align-items: start;
  ${above.mobile`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 0px;
    row-gap: 20px;
  `}
`;

const WorkoutTimer = styled(WorkoutTimerIcon)`
  width: 120px;
  ${above.mobile`
    justify-self: center;
  `}
`;
