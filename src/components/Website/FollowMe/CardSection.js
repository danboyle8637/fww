import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import FollowMeCard from "./FollowMeCard";
import { above } from "../../../styles/Theme";

const CardSection = () => {
  const query = graphql`
    query {
      followMe: allFile(
        filter: {
          sourceInstanceName: { eq: "FollowMeCopy" }
          name: { regex: "/Card/" }
        }
      ) {
        nodes {
          childMarkdownRemark {
            id
            html
            frontmatter {
              headline
              icon
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  const cards = data.followMe.nodes.map(card => {
    const id = card.childMarkdownRemark.id;
    const body = card.childMarkdownRemark.html;
    const headline = card.childMarkdownRemark.frontmatter.headline;
    const icon = card.childMarkdownRemark.frontmatter.icon;

    return (
      <FollowMeCard key={id} icon={icon} headline={headline} body={body} />
    );
  });

  return (
    <SectionContainer>
      <ContentContainer>
        <CardContainer>{cards}</CardContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default CardSection;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  row-gap: 60px;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    column-gap: 20px;
  `}
  ${above.tablet`
    column-gap: 60px;
  `}
`;
