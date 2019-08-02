// These are the favorite and completed buttons
import React from "react";
import styled from "styled-components";

import FavoriteIcon from "../../../../svgs/FavoriteIcon";

const WorkoutCardInfoFooter = () => {
  return (
    <InfoIconWrapper>
      <InfoButton />
      <InfoButton />
      <InfoButton />
      <IsFavorite />
    </InfoIconWrapper>
  );
};

export default WorkoutCardInfoFooter;

const InfoIconWrapper = styled.div`
  margin: 8px 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 24px));
  gap: 10px;
  align-items: center;
`;

const InfoButton = styled.div`
  background: transparent;
  border: 2px solid ${props => props.theme.mainBackgroundColor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

const IsFavorite = styled(FavoriteIcon)`
  width: 21px;
`;
