import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { BlogContainer, ElementContainer } from "../../../styles/Containers";
import { Header1 } from "../../../styles/Headlines";
import BlockContent from "./BlockContent";
import BlogAuthorBox from "./BlogAuthorBox";
import DividerMarker2 from "../../../svgs/DividerMarker2";
import { above } from "../../../styles/Theme";

const BlogPost = ({ data }) => {
  const featureImage = data.blogPost.mainImage.asset.fluid;
  const featureImageAltText = data.blogPost.mainImage.altText;
  const authorAvatar = data.blogPost.author.profileImage.asset.fluid;
  const authorName = data.blogPost.author.name;
  const authorSocial = data.blogPost.author.instagram;
  const authorCerts = data.blogPost.author.certifications;
  const authorAltText = data.blogPost.author.profileImage.altText;
  const headline = data.blogPost.title;
  const body = data.blogPost._rawBody;

  return (
    <BlogPostContainer>
      <BlockContentWrapper>
        <FeatureImageWrapper>
          <FeatureImage alt={featureImageAltText} fluid={featureImage} />
        </FeatureImageWrapper>
        <BlogAuthorBox
          altText={authorAltText}
          image={authorAvatar}
          name={authorName}
          instagram={authorSocial}
          certs={authorCerts}
        />
        <BlogContainer setMobileMarginTop={60}>
          <Header1
            tertiary
            mobileLarge
            setMLineHeight={1.4}
            setTLineHeight={1.4}
            setLLineHeight={1.4}
          >
            {headline}
          </Header1>
        </BlogContainer>
        <ElementContainer setMobileMarginTop={80}>
          <BlockContent blocks={body} />
        </ElementContainer>
        <BottomMarkerEdge />
      </BlockContentWrapper>
    </BlogPostContainer>
  );
};

export default BlogPost;

const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureImageWrapper = styled.div`
  width: 100%;
  ${above.ipadPro`
    border-radius: 8px 8px 0 0;
  `}
`;

const FeatureImage = styled(Image)`
  ${above.ipadPro`
    border-radius: 8px 8px 0 0;
  `}
`;

const BottomMarkerEdge = styled(DividerMarker2)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 160%;
  transform: translateY(160px);
  z-index: 2;
  ${above.mobile`
    transform: translateY(170px);
    width: 100%;
  `}
`;

const BlockContentWrapper = styled.div`
  position: relative;
  margin: 0 0 80px 0;
  padding: 0 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.mainBackgroundColor};
  z-index: 1;
  ${above.mobile`
    margin: 0 0 120px 0;
    padding: 0 0 60px 0;
    width: 700px;
  `}
`;

export const query = graphql`
  query($id: String!) {
    blogPost: sanityBlogPost(id: { eq: $id }) {
      title
      slug {
        current
      }
      author {
        name
        slug {
          current
        }
        profileImage {
          altText
          asset {
            fluid(maxWidth: 1200, maxHeight: 680) {
              ...GatsbySanityImageFluid
            }
          }
        }
        instagram
        certifications
      }
      mainImage {
        altText
        asset {
          fluid(maxWidth: 1200, maxHeight: 680) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBody
    }
  }
`;
