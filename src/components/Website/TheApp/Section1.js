import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import ProgressIndicatorBenefit from "./ProgressIndicatorBenefit";
import BenefitCard from "./BenefitCard";
import { above } from "../../../styles/Theme";

const Section1 = () => {
  const query = graphql`
    query {
      benefit1: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard1" }
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
      benefit2: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard2" }
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
      benefit4: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard4" }
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
  const benefit1Icon = data.benefit1.childMarkdownRemark.frontmatter.icon;
  const benefit1TopHeadline =
    data.benefit1.childMarkdownRemark.frontmatter.topHeadline;
  const benefit1BottomHeadline =
    data.benefit1.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit1Body = data.benefit1.childMarkdownRemark.html;

  const benefit2Icon = data.benefit2.childMarkdownRemark.frontmatter.icon;
  const benefit2TopHeadline =
    data.benefit2.childMarkdownRemark.frontmatter.topHeadline;
  const benefit2BottomHeadline =
    data.benefit2.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit2Body = data.benefit2.childMarkdownRemark.html;

  const benefit4Icon = data.benefit4.childMarkdownRemark.frontmatter.icon;
  const benefit4TopHeadline =
    data.benefit4.childMarkdownRemark.frontmatter.topHeadline;
  const benefit4BottomHeadline =
    data.benefit4.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit4Body = data.benefit4.childMarkdownRemark.html;

  return (
    <SectionContainer>
      <ContentContainer>
        <Section1Container>
          <BenefitCardWrapper>
            <BenefitCard
              icon={benefit1Icon}
              topHeadline={benefit1TopHeadline}
              bottomHeadline={benefit1BottomHeadline}
              body={benefit1Body}
            />
            <BenefitCard
              icon={benefit2Icon}
              topHeadline={benefit2TopHeadline}
              bottomHeadline={benefit2BottomHeadline}
              body={benefit2Body}
            />
            <BenefitCard
              icon={benefit4Icon}
              topHeadline={benefit4TopHeadline}
              bottomHeadline={benefit4BottomHeadline}
              body={benefit4Body}
            />
          </BenefitCardWrapper>
          <ProgressIndicatorBenefit />
        </Section1Container>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Section1;

const Section1Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 60px;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 100px;
  `}
`;

const BenefitCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  row-gap: 160px;
  ${above.mobile`
    row-gap: 120px;
  `}
`;
