import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import BenefitCard from "./BenefitCard";

const Section6 = () => {
  const query = graphql`
    query {
      benefit10: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard10" }
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
  const benefit10Icon = data.benefit10.childMarkdownRemark.frontmatter.icon;
  const benefit10TopHeadline =
    data.benefit10.childMarkdownRemark.frontmatter.topHeadline;
  const benefit10BottomHeadline =
    data.benefit10.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit10Body = data.benefit10.childMarkdownRemark.html;

  return (
    <SectionContainer>
      <ContentContainer>
        <ElementContainer justifyCenter>
          <BenefitCard
            icon={benefit10Icon}
            topHeadline={benefit10TopHeadline}
            bottomHeadline={benefit10BottomHeadline}
            body={benefit10Body}
          />
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Section6;
