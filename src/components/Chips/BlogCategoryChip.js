import React from "react";
import styled from "styled-components";

const BlogCategoryChip = ({ color, label }) => {
  return (
    <ChipContainer color={color}>
      <ChipLabel>{label}</ChipLabel>
    </ChipContainer>
  );
};

export default BlogCategoryChip;

const ChipContainer = styled.div`
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.color};
  border-radius: 90px;
`;

const ChipLabel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #f8f8f8;
  text-transform: uppercase;
  line-height: 1;
`;
