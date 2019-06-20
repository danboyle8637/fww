import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import FitNumberCard from "./FitNumberCard";
import BenefitCard from "./BenefitCard";
import { above } from "../../../styles/Theme";

const Section2 = () => {
  const query = graphql`
    query {
      fitNumbers: allFile(
        filter: {
          sourceInstanceName: { eq: "TheAppCopy" }
          name: { regex: "/FitNumber/" }
        }
      ) {
        nodes {
          childMarkdownRemark {
            id
            html
            frontmatter {
              fit_number
            }
          }
        }
      }
      benefit5: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard5" }
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

  const benefit5Icon = data.benefit5.childMarkdownRemark.frontmatter.icon;
  const benefit5TopHeadline =
    data.benefit5.childMarkdownRemark.frontmatter.topHeadline;
  const benefit5BottomHeadline =
    data.benefit5.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit5Body = data.benefit5.childMarkdownRemark.html;

  const cards = data.fitNumbers.nodes.map(card => {
    const id = card.childMarkdownRemark.id;
    const description = card.childMarkdownRemark.html;
    const fitNumber = card.childMarkdownRemark.frontmatter.fit_number;

    return (
      <FitNumberCard key={id} fitNumber={fitNumber} description={description} />
    );
  });

  return (
    <SectionContainer>
      <ContentContainer>
        <Section2Container>
          <BenefitCard
            icon={benefit5Icon}
            topHeadline={benefit5TopHeadline}
            bottomHeadline={benefit5BottomHeadline}
            body={benefit5Body}
          />
          <FitCardContainer>{cards}</FitCardContainer>
        </Section2Container>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Section2;

const Section2Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  row-gap: 80px;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    grid-template-row: auto;
    row-gap: 0;
    column-gap: 30px;
    align-items: center;
  `}
`;

const FitCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 80px;
`;
