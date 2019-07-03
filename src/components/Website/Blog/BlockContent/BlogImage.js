import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";

const BlogImage = ({ altText, image }) => {
  return <InlineImage fluid={image} alt={altText} />;
};

export default BlogImage;

const InlineImage = styled(Image)`
  width: 100%;
`;
