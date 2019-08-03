import React from "react";
import styled from "styled-components";

import { Header3, Header4 } from "../../../styles/Headlines";
import ProgressLoader from "../../../svgs/ProgressLoader";

const ProgressIndicator = () => {
  return (
    <ProgressContainer>
      <Header3 upper mobileMedium primary>
        Progress
      </Header3>
      <LoaderGrid>
        <PercentWrapper>
          <Header4 mobileSmall primary>
            100%
          </Header4>
        </PercentWrapper>
        <ProgressGraph />
      </LoaderGrid>
    </ProgressContainer>
  );
};

export default ProgressIndicator;

const ProgressContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: center;
  gap: 20px;
  width: 100%;
`;

const LoaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

const ProgressGraph = styled(ProgressLoader)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 120px;
`;

const PercentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`;
