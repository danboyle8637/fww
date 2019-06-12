import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
} from "../../../../styles/Containers";
import WorkoutTimerCard from "./WorkoutTimerCard";
import { above } from "../../../../styles/Theme";

const TimerSection = () => {
  const query = graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "WhatWeDoCopy" }
          name: { regex: "/Timer/" }
        }
      ) {
        nodes {
          childMarkdownRemark {
            html
            frontmatter {
              order
              timerId
              headline
            }
          }
        }
      }
    }
  `;

  const copy = useStaticQuery(query);

  const timerCards = copy.allFile.nodes.map(card => {
    const id = card.childMarkdownRemark.frontmatter.order;
    const timerId = card.childMarkdownRemark.frontmatter.timerId;
    const headline = card.childMarkdownRemark.frontmatter.headline;
    const body = card.childMarkdownRemark.html;

    return (
      <WorkoutTimerCard
        key={id}
        timerId={timerId}
        headline={headline}
        body={body}
      />
    );
  });

  return (
    <SectionContainer>
      <ContentContainer>
        <TimerCardWrapper>{timerCards}</TimerCardWrapper>
      </ContentContainer>
    </SectionContainer>
  );
};

export default TimerSection;

const TimerCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
  ${above.mobile`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    column-gap: 40px;
    row-gap: 0;
  `}
`;
