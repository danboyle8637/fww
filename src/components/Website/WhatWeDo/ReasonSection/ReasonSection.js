import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { SectionContainer } from "../../../../styles/Containers";
import Headline1 from "./Headlines/Headline1";
import BenefitCard from "../../../Cards/BenefitCard";
import { useActiveCardContext } from "../../../../context/ActiveSlideContext";
import { above } from "../../../../styles/Theme";

const ReasonSection = () => {
  // eslint-disable-next-line
  const [{ activeCard }, dispatch2] = useActiveCardContext();

  useEffect(() => {
    dispatch2({ type: "setActiveCard", value: 1 });
  }, [dispatch2]);

  const query = graphql`
    query {
      reasonCards: allFile(
        filter: {
          sourceInstanceName: { eq: "WhatWeDoCopy" }
          name: { regex: "/[1-3]Card/" }
        }
        sort: { fields: birthTime }
      ) {
        nodes {
          id
          childMarkdownRemark {
            html
            frontmatter {
              id
              headline
              buttonText
              image {
                childImageSharp {
                  fluid(maxWidth: 864, maxHeight: 420, quality: 90) {
                    ...GatsbyImageSharpFluid
                    aspectRatio
                  }
                }
              }
              path
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  const cards = data.reasonCards.nodes.map(card => {
    const id = card.id;
    const cardId = card.childMarkdownRemark.frontmatter.id;
    const headline = card.childMarkdownRemark.frontmatter.headline;
    const buttonText = card.childMarkdownRemark.frontmatter.buttonText;
    const path = card.childMarkdownRemark.frontmatter.path;
    const description = card.childMarkdownRemark.html;
    const image =
      card.childMarkdownRemark.frontmatter.image.childImageSharp.fluid;

    return (
      <BenefitCard
        key={id}
        cardId={cardId}
        headline={headline}
        buttonText={buttonText}
        path={path}
        description={description}
        image={image}
      />
    );
  });

  return (
    <SectionContainer>
      <Headline1 />
      <CardContainer>{cards}</CardContainer>
    </SectionContainer>
  );
};

export default ReasonSection;

const CardContainer = styled.div`
  margin: 40px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 40px;
  ${above.tablet`
    grid-template-columns: 1fr 1fr;
  `}
  ${above.ipadPro`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
