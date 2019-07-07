import React from "react";
import styled from "styled-components";

import FWWLogo from "../../../svgs/FWWLogo";
import BlogKettlebellIcon from "../../../svgs/BlogKettlebellIcon";

const BlogHeader = () => {
  return (
    <HeadlineGrid>
      <Kettlebell />
      <ContentContainer>
        <Logo />
        <BlogHeadline>Blog</BlogHeadline>
      </ContentContainer>
    </HeadlineGrid>
  );
};

export default BlogHeader;

const HeadlineGrid = styled.div`
  margin: 0 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: end;
`;

const ContentContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Kettlebell = styled(BlogKettlebellIcon)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 80px;
`;

const Logo = styled(FWWLogo)`
  width: 80px;
`;

const BlogHeadline = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 62px;
  font-weight: 800;
  color: ${props => props.theme.accentBackgroundColor};
  text-transform: uppercase;
`;
