import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import { Link } from "gatsby";

import BlogCardFooter from "./Footers/BlogCardFooter";
import { above } from "../../styles/Theme";

const BlogCard = ({ featureImage, altText, teaserCopy, tags, slug }) => {
  return (
    <CardLink to={`/blog/${slug}`}>
      <CardContainer>
        <PostImage fluid={featureImage} alt={altText} title={altText} />
        <ContentWrapper>
          <BlogDescription dangerouslySetInnerHTML={{ __html: teaserCopy }} />
          <BlogCardFooter tags={tags} />
        </ContentWrapper>
      </CardContainer>
    </CardLink>
  );
};

export default BlogCard;

const CardLink = styled(Link)`
  text-decoration: none;
  border-radius: 10px 10px 40px 10px;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.primaryAccent};
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px 10px 40px 10px;
  transition: box-shadow 200ms ease-in-out;
  ${above.ipadPro`
    &:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
        props.theme.primaryAccent};
    }
  `}
`;

const PostImage = styled(Image)`
  border-radius: 10px 10px 0 0;
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding: 12px 8px 8px 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  justify-items: center;
`;

const BlogDescription = styled.div`
  font-size: 14px;
  color: ${props => props.theme.bodyText};
`;
