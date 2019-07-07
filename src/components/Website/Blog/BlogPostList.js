import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import BlogCard from "./BlogCard";
import BlogHeader from "./BlogHeader";
import { above } from "../../../styles/Theme";

const BlogPostList = ({ data }) => {
  const cards = data.blogCard.nodes.map(card => {
    const id = card.id;
    const headline = card.title;
    const featureImage = card.mainImage.asset.fluid;
    const featureImageAltText = card.mainImage.asset.altText;
    const tags = card.tags;
    const teaserCopy = card.teaserCopy;
    const buttonText = card.buttonText;
    const slug = card.slug.current;

    return (
      <BlogCard
        key={id}
        headline={headline}
        featureImage={featureImage}
        altText={featureImageAltText}
        buttonText={buttonText}
        tags={tags}
        teaserCopy={teaserCopy}
        buttonText={buttonText}
        slug={slug}
      />
    );
  });

  return (
    <SectionContainer setIpadProMarginTop={"2.5rem"}>
      <ContentContainer>
        <BlogHeader />
        <BlogPostContainer>{cards}</BlogPostContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default BlogPostList;

const BlogPostContainer = styled.div`
  margin: 80px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 60px;
  ${above.mobile`
    margin: 60px 0 0 0;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  `}
  ${above.laptop`
    margin: 80px 0 0 0;
  `}
`;

export const query = graphql`
  query {
    blogCard: allSanityBlogPost {
      nodes {
        id
        title
        teaserCopy
        buttonText
        mainImage {
          altText
          asset {
            fluid(maxWidth: 1200, maxHeight: 680) {
              ...GatsbySanityImageFluid
            }
          }
        }
        tags {
          title
        }
        slug {
          current
        }
      }
    }
  }
`;
