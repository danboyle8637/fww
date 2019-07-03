import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import BlogCard from "./BlogCard";
import { above } from "../../../styles/Theme";

const BlogPostList = () => {
  const query = graphql`
    query {
      testBlogCards: allFile(
        filter: { sourceInstanceName: { eq: "BlogCopy" } }
      ) {
        nodes {
          id
          childMarkdownRemark {
            html
            frontmatter {
              featureImage {
                childImageSharp {
                  fluid(maxWidth: 1200, maxHeight: 680, quality: 90) {
                    ...GatsbyImageSharpFluid
                    aspectRatio
                  }
                }
              }
              headline
              buttonText
              tags
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const cards = data.testBlogCards.nodes.map(card => {
    const id = card.id;
    const headline = card.childMarkdownRemark.frontmatter.headline;
    const featureImage =
      card.childMarkdownRemark.frontmatter.featureImage.childImageSharp.fluid;
    const buttonText = card.childMarkdownRemark.frontmatter.buttonText;
    const tags = card.childMarkdownRemark.frontmatter.tags;
    const description = card.childMarkdownRemark.html;

    return (
      <BlogCard
        key={id}
        headline={headline}
        featureImage={featureImage}
        buttonText={buttonText}
        tags={tags}
        description={description}
      />
    );
  });

  return <BlogPostContainer>{cards}</BlogPostContainer>;
};

export default BlogPostList;

const BlogPostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 60px;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
  `}
`;
