import React from "react";
import styled from "styled-components";

import { SectionContainer } from "../../../styles/Containers";
import IgniteCard from "./IgniteCard";
import BBCCard from "./BBCCard";
import StrongCard from "./StrongCard";
import SwipeDot from "../../../svgs/SwipeDot";
import DraggableLocationDots from "../../Shared/DraggableLocationDots";
import DraggableRow from "../../../Animations/Tweens/DraggableRow";
import { useIsTweeningContext } from "../../../context/IsTweeningContext";
import { useActiveCardContext } from "../../../context/ActiveSlideContext";
import DismissSwipeIcon from "../../../Animations/ReactTransitions/DismissSwipeIcon";
import "./Program.css";

const ProgramsMobile = () => {
  // eslint-disable-next-line
  const [{ isTweening }, dispatch] = useIsTweeningContext();
  // eslint-disable-next-line
  const [{ activeCard }, dispatch2] = useActiveCardContext();

  return (
    <SectionContainer setMobileMarginTop={"60px"} setMobileMarginBottom={"0"}>
      <ProgramGrid>
        <DismissSwipeIcon isTweening={isTweening}>
          <SwipeWrapper>
            <SwipeIcon swipeFill="#5afdf2" />
          </SwipeWrapper>
        </DismissSwipeIcon>
        <ContentWrapper>
          <DraggableRow numberOfCards={3}>
            <IgniteCard />
            <BBCCard />
            <StrongCard />
          </DraggableRow>
        </ContentWrapper>
      </ProgramGrid>
      <DraggableLocationDots numDots={5} />
      {activeCard}
    </SectionContainer>
  );
};

export default ProgramsMobile;

const ProgramGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`;

const SwipeWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 10px 0px 2px 12px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  align-self: center;
  justify-self: center;
  z-index: 1;
`;

const SwipeIcon = styled(SwipeDot)`
  justify-self: center;
  width: 140px;
`;
