import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import OutsideButton from "../../Buttons/OutsideButton";
import ResetProgramCard from "../../Cards/ResetProgramCard";
import YouLearnCopy from "./Copy/YouLearnCopy";
import { above } from "../../../styles/Theme";

const YouLearnSection = () => {
  const query = graphql`
    query {
      resetProgramCards: allFile(
        filter: {
          sourceInstanceName: { eq: "ProgramsCopy" }
          name: { regex: "/Reset/" }
        }
        sort: { fields: id }
      ) {
        nodes {
          childMarkdownRemark {
            id
            html
            frontmatter {
              programId
              fitnessLevel
              numberOfWorkouts
              duration
              altText
              coverImage {
                childImageSharp {
                  fluid(maxWidth: 1200, maxHeight: 480, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  const cards = data.resetProgramCards.nodes.map(card => {
    const id = card.childMarkdownRemark.id;
    const description = card.childMarkdownRemark.html;
    const programId = card.childMarkdownRemark.frontmatter.programId;
    const fitnessLevel = card.childMarkdownRemark.frontmatter.fitnessLevel;
    const numberOfWorkouts =
      card.childMarkdownRemark.frontmatter.numberOfWorkouts;
    const duration = card.childMarkdownRemark.frontmatter.duration;
    const altText = card.childMarkdownRemark.frontmatter.altText;
    const coverImage =
      card.childMarkdownRemark.frontmatter.coverImage.childImageSharp.fluid;

    return (
      <ResetProgramCard
        key={id}
        programId={programId}
        description={description}
        fitnessLevel={fitnessLevel}
        numberOfWorkouts={numberOfWorkouts}
        duration={duration}
        altText={altText}
        coverImage={coverImage}
      />
    );
  });

  return (
    <SectionContainer>
      <ContentContainer>
        <YouLearnCopy />
      </ContentContainer>
      <CardWrapper>{cards}</CardWrapper>
      <ContentContainer>
        <ElementContainer justifyCenter setMobileMarginTop={40}>
          <OutsideButton linkLocation="https://reset.fitwomensweekly.com/7-day-reset-step1">
            Click To Choose Your Program
          </OutsideButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default YouLearnSection;

const CardWrapper = styled.div`
  margin: 60px 0 40px 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  ${above.ipadPro`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
