import React from "react";
import styled from "styled-components";

import SwipeDot from "../../svgs/SwipeDot";
import DismissSwipeIcon from "../../Animations/ReactTransitions/DismissSwipeIcon";
import { useIsTweeningContext } from "../../context/IsTweeningContext";

const AboveCardsSwipe = () => {
  // eslint-disable-next-line
  const [{ isTweening }, dispatch] = useIsTweeningContext();

  return (
    <SwipeWrapper>
      <DismissSwipeIcon isTweening={isTweening}>
        <Swipe />
      </DismissSwipeIcon>
    </SwipeWrapper>
  );
};

export default AboveCardsSwipe;

const Swipe = styled(SwipeDot)`
  width: 140px;
`;

const SwipeWrapper = styled.div`
  margin: 20px 0 0 0;
  height: 60px;
`;
