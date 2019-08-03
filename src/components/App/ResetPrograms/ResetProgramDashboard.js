import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import {
  ElementContainer,
  AppContentContainer,
} from "../../../styles/Containers";
import { Header4 } from "../../../styles/Headlines";
import { SetBodyText } from "../../../styles/BodyText";
import TrainingPlanIcon from "../../../svgs/TrainingPlanIcon";
import ProgressIndicator from "./ProgressIndicator";
import { above } from "../../../styles/Theme";

const ResetProgramDashboard = () => {
  const query = graphql`
    query {
      pushupWorkoutIcon: file(
        sourceInstanceName: { eq: "AppImages" }
        name: { eq: "body-burn-reset-pushup-workout-icon" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pushupWorkoutGoals: file(
        sourceInstanceName: { eq: "AppCopy" }
        name: { eq: "TrainingPlanCardDay1" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const workoutIcon = data.pushupWorkoutIcon.childImageSharp.fluid;
  const body = data.pushupWorkoutGoals.childMarkdownRemark.html;

  return (
    <AppContentContainer>
      <DashboardContainer>
        <ProgressWrapper>
          <ProgressIndicator />
        </ProgressWrapper>
        <TrainingPlanWrapper>
          <TrainingHeaderWrapper>
            <WorkoutIcon fluid={workoutIcon} />
            <HeadlineWrapper>
              <DateWrapper>
                <Calendar />
                <Header4 mobileSmall primary>
                  Aug. 3rd 2019
                </Header4>
              </DateWrapper>
              <Header4 mobileSmall primary>
                Pushup Workout
              </Header4>
            </HeadlineWrapper>
          </TrainingHeaderWrapper>
          <ElementContainer>
            <SetBodyText
              setFontSize={14}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </ElementContainer>
        </TrainingPlanWrapper>
      </DashboardContainer>
    </AppContentContainer>
  );
};

export default ResetProgramDashboard;

const DashboardContainer = styled.div`
  margin: 60px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  align-items: center;
  ${above.mobile`
    grid-template-columns: 220px 320px;
    grid-template-rows: 1fr;
  `}
`;

const ProgressWrapper = styled.div`
  padding: 20px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.baseBackgroundColor};
  align-items: center;
  justify-items: center;
  height: 100%;
  border-radius: 8px;
`;

const TrainingPlanWrapper = styled.div`
  padding: 20px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 12px;
  background: ${props => props.theme.mainBackgroundBorderColor};
  justify-items: start;
  max-width: 320px;
  height: 100%;
  border-radius: 8px;
`;

const TrainingHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
`;

const WorkoutIcon = styled(Image)`
  width: 60px;
  border-radius: 50%;
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
`;

const Calendar = styled(TrainingPlanIcon)`
  width: 20px;
`;
