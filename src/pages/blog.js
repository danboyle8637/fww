import React from "react";

import { SectionContainer, ContentContainer } from "../styles/Containers";
import BlogPostList from "../components/Website/Blog/BlogPostList";
import BlogBlockQuote from "../components/Website/Blog/BlockContent/BlogBlockQuote";

const Blog = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <BlogBlockQuote>Click to see this</BlogBlockQuote>
        <BlogPostList />
      </ContentContainer>
    </SectionContainer>
  );
};

export default Blog;
