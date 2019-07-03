import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

import { ElementContainer } from "../../../styles/Containers";
import { OutterButton } from "../../../styles/Buttons";
import BlogMoreIcon from "../../../svgs/BlogMoreIcon";
import "./Blog.css";

const BlogCard = ({
  featureImage,
  headline,
  description,
  buttonText,
  tags,
}) => {
  const tagList = tags.map(tag => <BlogTags key={tag}>{tag}</BlogTags>);

  return (
    <BlogCardContainer>
      <FeatureImage fluid={featureImage} />
      <ContentWrapper>
        <BlogCardHeadline>{headline}</BlogCardHeadline>
        <BlogDescription dangerouslySetInnerHTML={{ __html: description }} />
        <TagWrapper>{tagList}</TagWrapper>
        <ElementContainer justifyCenter>
          <OutterButton kettlebell={true}>{buttonText}</OutterButton>
        </ElementContainer>
      </ContentWrapper>
      <OpenCloseWrapper>
        <MoreAndCloseIcon />
        <MoreCloseLabel>CLOSE</MoreCloseLabel>
      </OpenCloseWrapper>
    </BlogCardContainer>
  );
};

export default BlogCard;

const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.bodyText};
  border-radius: 6px;
  width: 100%;
`;

const FeatureImage = styled(Image)`
  width: 100%;
  border-radius: 6px 6px 0 0;
`;

const ContentWrapper = styled.div`
  padding: 12px 12px 0 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const BlogCardHeadline = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 800;
  font-size: 22px;
  color: ${props => props.theme.mainBackgroundColor};
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const BlogDescription = styled.p`
  margin: 12px 0 0 0;
  padding: 0;
  font-size: 14px;
  color: ${props => props.theme.mainBackgroundColor};
`;

const TagWrapper = styled.div`
  margin: 12px 0 26px 0;
  display: flex;
  justify-content: flex-start;
  gap: 6px;
`;

const BlogTags = styled.p`
  margin: 0;
  padding: 2px 8px;
  font-size: 13px;
  background: rgba(25, 25, 28, 0.3);
  border-radius: 25px;
  color: ${props => props.theme.whiteText};
`;

const OpenCloseWrapper = styled.div`
  margin: 16px 0;
  padding: 0 12px 0 0;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreCloseLabel = styled.p`
  margin: 0 0 0 12px;
  padding: 0;
  font-size: 14px;
  color: ${props => props.theme.mainBackgroundColor};
`;

const MoreAndCloseIcon = styled(BlogMoreIcon)`
  width: 60px;
`;
