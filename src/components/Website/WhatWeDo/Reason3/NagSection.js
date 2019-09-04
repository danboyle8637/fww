import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
} from "../../../../styles/Containers";
import WeTrainYouCard from "./WeTrainYouCard";
import { above } from "../../../../styles/Theme";

const NagSection = () => {
  const query = graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "WhatWeDoCopy" }
          name: { regex: "/Nag/" }
        }
      ) {
        nodes {
          childMarkdownRemark {
            html
            frontmatter {
              id
              headline
              icon
            }
          }
        }
      }
    }
  `;

  const copy = useStaticQuery(query);

  const cards = copy.allFile.nodes.map(card => {
    const id = card.childMarkdownRemark.frontmatter.id;
    const icon = card.childMarkdownRemark.frontmatter.icon;
    const headline = card.childMarkdownRemark.frontmatter.headline;
    const body = card.childMarkdownRemark.html;

    return (
      <WeTrainYouCard key={id} icon={icon} headline={headline} body={body} />
    );
  });

  return (
    <SectionContainer>
      <ContentContainer>
        <NagCardWrapper>{cards}</NagCardWrapper>
      </ContentContainer>
    </SectionContainer>
  );
};

export default NagSection;

const NagCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr auto;
  row-gap: 40px;
  ${above.mobile`
    row-gap: 40px;
  `}
`;
