import React, { useEffect } from "react";
import styled from "styled-components";

import { SectionContainer, ElementContainer } from "../../../styles/Containers";
import IgniteCard from "./IgniteCard";
import BBCCard from "./BBCCard";
import StrongCard from "./StrongCard";
import SwipeDot from "../../../svgs/SwipeDot";
import LocationDot from "../../Shared/LocationDot";
import DraggableRow from "../../../Animations/Tweens/DraggableRow";
import { useIsTweeningContext } from "../../../context/IsTweeningContext";
import { useActiveCardContext } from "../../../context/ActiveSlideContext";
import DismissSwipeIcon from "../../../Animations/ReactTransitions/DismissSwipeIcon";
import "./Program.css";

const ProgramsMobile = () => {
  // eslint-disable-next-line
  const [{ isTweening }, dispatch] = useIsTweeningContext();
  const [{ activeCard }, dispatch2] = useActiveCardContext();

  useEffect(() => {
    dispatch2({ type: "setActiveCard", value: 1 });
  }, [dispatch2]);

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
      <ElementContainer justifyCenter>
        <LocationDot active={activeCard >= 1 ? true : false} />
        <LocationDot active={activeCard === 0 ? true : false} />
        <LocationDot active={activeCard <= -1 ? true : false} />
      </ElementContainer>
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
