import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";

import { above } from "../../../styles/Theme";

const BlogAuthorBox = ({ altText, image, name, instagram, certs }) => {
  return (
    <AuthorContainer>
      <Avatar alt={altText} fluid={image} />
      <ContentWrapper>
        <Content>{name}</Content>
        <Content>{instagram}</Content>
        <Content>{certs}</Content>
      </ContentWrapper>
    </AuthorContainer>
  );
};

export default BlogAuthorBox;

const AuthorContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
`;

const Avatar = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Content = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
  line-height: 1.2rem;
  ${above.tablet`
    font-size: 15px;
    line-height: 1.4rem;
  `}
`;
