import React from "react";

import { SectionContainer, ContentContainer } from "../styles/Containers";
import BlogPostList from "../components/Website/Blog/BlogPostList";

const Blog = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <BlogPostList />
      </ContentContainer>
    </SectionContainer>
  );
};

export default Blog;
