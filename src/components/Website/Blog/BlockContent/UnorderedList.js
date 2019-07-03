import React from "react";
import styled from "styled-components";

const UnorderedList = ({ children }) => {
  return <BulletList>{children}</BulletList>;
};

export default UnorderedList;

const BulletList = styled.ul`
  padding: 0 20px;
  list-style: none;
`;
