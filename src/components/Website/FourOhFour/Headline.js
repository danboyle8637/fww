import React from "react";
import styled from "styled-components";

import { Header1 } from "../../../styles/Headlines";

const Headline = () => {
  return (
    <HeadlineContainer>
      <Header1
        primary
        mobileSmall
        tabletMedium
        laptopMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setIpadLineHeight={1.4}
        setLLineHeight={1.4}
      >
        Oh No! The Page You Want Doesn't Exist!
      </Header1>
    </HeadlineContainer>
  );
};

export default Headline;

const HeadlineContainer = styled.div`
  margin: 30px 0 0 0;
  width: 100%;
`;
