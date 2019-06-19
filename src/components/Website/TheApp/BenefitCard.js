import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import { Header3 } from "../../../styles/Headlines";
import { SetBodyText } from "../../../styles/BodyText";
import PlayButtonIcon from "../../../svgs/PlayButtonIcon";
import CompassIcon from "../../../svgs/CompassIcon";
import PenIcon from "../../../svgs/PenIcon";
import KettlebellHeartIcon from "../../../svgs/KettlebellHeartIcon";
import ExerciseDatabaseIcon from "../../../svgs/ExerciseDatabaseIcon";
import SpoonFormKnifeIcon from "../../../svgs/SpoonForkKnifeIcon";
import PersonalMenuIcon from "../../../svgs/PersonalMenuIcon";
import UpgradeIcon from "../../../svgs/UpgradeIcon";
import FitnessNumberIcon from "../../../svgs/FitnessNumberIcon";
import ProgressIcon from "../../../svgs/ProgressIcon";
import { above } from "../../../styles/Theme";

const BenefitCard = ({
  icon,
  topHeadline,
  bottomHeadline,
  body,
  gradientId,
  column,
}) => {
  const iconArray = [
    { title: "play_button", component: <PlayButton /> },
    { title: "compass", component: <Compass /> },
    { title: "pen", component: <Pen /> },
    {
      title: "progress_indicator",
      component: <Progress gradientId={gradientId} />,
    },
  ];

  const showIcon = iconArray.find(iconElement => {
    return iconElement.title === icon;
  });

  return (
    <CardContainer>
      <TopWrapper column={column}>
        {showIcon.component}
        <HeadlineWrapper column={column}>
          <Header3
            secondary
            mobileSmall
            setMLineHeight={1.4}
            setTLineHeight={1.4}
            setLLineHeight={1.4}
          >
            {topHeadline}
          </Header3>
          <Header3 upper primary mobileMedium>
            {bottomHeadline}
          </Header3>
        </HeadlineWrapper>
      </TopWrapper>
      <ElementContainer setMobileMarginTop={12}>
        <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
      </ElementContainer>
    </CardContainer>
  );
};

export default BenefitCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${above.mobile`
    width: 326px;
  `}
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  align-items: ${props => (props.column ? "flex-start" : "center")};
  width: 100%;
`;

const HeadlineWrapper = styled.div`
  margin: ${props => (props.column ? "0" : "0 0 0 20px")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PlayButton = styled(PlayButtonIcon)`
  width: 48px;
`;

const Compass = styled(CompassIcon)`
  width: 56px;
`;

const Pen = styled(PenIcon)`
  width: 48px;
`;

const Progress = styled(ProgressIcon)`
  margin: 0 0 20px 0;
  width: 78px;
  align-self: center;
`;
