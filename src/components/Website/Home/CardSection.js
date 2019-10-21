import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import HomeCard from "../../Cards/HomeCard";
import { above } from "../../../styles/Theme";

const CardSection = () => {
  const query = graphql`
    query {
      homeCards: allFile(
        filter: {
          sourceInstanceName: { eq: "CardCopy" }
          name: { regex: "/HomeCard/" }
        }
        sort: { fields: birthtime, order: ASC }
      ) {
        nodes {
          childMarkdownRemark {
            id
            html
            frontmatter {
              headline
              slug
              buttonText
              image {
                childImageSharp {
                  fluid(
                    maxWidth: 300
                    maxHeight: 600
                    jpegProgressive: true
                    quality: 90
                  ) {
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

  const cards = useStaticQuery(query);

  const cardList = cards.homeCards.nodes.map(card => {
    const id = card.childMarkdownRemark.id;
    const body = card.childMarkdownRemark.html;
    const headline = card.childMarkdownRemark.frontmatter.headline;
    const slug = card.childMarkdownRemark.frontmatter.slug;
    const buttonText = card.childMarkdownRemark.frontmatter.buttonText;
    const image =
      card.childMarkdownRemark.frontmatter.image.childImageSharp.fluid;

    return (
      <HomeCard
        key={id}
        body={body}
        headline={headline}
        slug={slug}
        buttonText={buttonText}
        image={image}
      />
    );
  });

  return <CardContainer>{cardList}</CardContainer>;
};

export default CardSection;

const CardContainer = styled.div`
  margin: 80px 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 40px;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  `}
  ${above.tablet`
    align-self: center;
    width: 90%;
  `}
  ${above.ipadPro`
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    width: 90%;
  `}
`;
