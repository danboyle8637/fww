import React from "react";
import styled from "styled-components";

const Spacer = ({ space }) => {
  return <CreateSpace height={`${space}px`} />;
};

export default Spacer;

const CreateSpace = styled.div`
  height: ${props => props.height};
`;
