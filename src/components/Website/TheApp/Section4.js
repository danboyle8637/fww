import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import BenefitCard from "./BenefitCard";
import { above } from "../../../styles/Theme";

const Section4 = () => {
  const query = graphql`
    query {
      benefit8: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard8" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            icon
            topHeadline
            bottomHeadline
          }
        }
      }
      benefit9: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard9" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            icon
            topHeadline
            bottomHeadline
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const benefit8Icon = data.benefit8.childMarkdownRemark.frontmatter.icon;
  const benefit8TopHeadline =
    data.benefit8.childMarkdownRemark.frontmatter.topHeadline;
  const benefit8BottomHeadline =
    data.benefit8.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit8Body = data.benefit8.childMarkdownRemark.html;

  const benefit9Icon = data.benefit9.childMarkdownRemark.frontmatter.icon;
  const benefit9TopHeadline =
    data.benefit9.childMarkdownRemark.frontmatter.topHeadline;
  const benefit9BottomHeadline =
    data.benefit9.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit9Body = data.benefit9.childMarkdownRemark.html;

  return (
    <SectionContainer>
      <ContentContainer>
        <CardContainer>
          <BenefitCard
            icon={benefit8Icon}
            topHeadline={benefit8TopHeadline}
            bottomHeadline={benefit8BottomHeadline}
            body={benefit8Body}
          />
          <BenefitCard
            icon={benefit9Icon}
            topHeadline={benefit9TopHeadline}
            bottomHeadline={benefit9BottomHeadline}
            body={benefit9Body}
          />
        </CardContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Section4;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 120px;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 40px;
  `}
  ${above.tablet`
    column-gap: 120px;
  `}
`;
