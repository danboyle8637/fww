import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import { SetBodyText } from "../../../styles/BodyText";
import { Header4 } from "../../../styles/Headlines";
import TrainingPlanIcon from "../../../svgs/TrainingPlanIcon";

const TrainingPlan = () => {
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
  );
};

export default TrainingPlan;

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

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const WorkoutIcon = styled(Image)`
  width: 60px;
  border-radius: 50%;
`;

const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
`;

const Calendar = styled(TrainingPlanIcon)`
  width: 20px;
`;
