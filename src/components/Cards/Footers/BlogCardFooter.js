import React from "react";
import styled from "styled-components";

import BlogCategoryChip from "../../Chips/BlogCategoryChip";
import BlogCardArrowNav from "../../Navigation/BlogCardArrowNav";

const BlogCardFooter = ({ tags }) => {
  const postTags = tags.map(tag => {
    const id = tag.title;
    const label = tag.title;
    const color = tag.tagColor;
    return <BlogCategoryChip key={id} label={label} color={color} />;
  });

  return (
    <FooterContainer>
      <PostTagWrapper>{postTags}</PostTagWrapper>
      <BlogCardArrowNav />
    </FooterContainer>
  );
};

export default BlogCardFooter;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PostTagWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 8px;
  align-items: center;
`;
