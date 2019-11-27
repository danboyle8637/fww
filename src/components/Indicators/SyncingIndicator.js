import React from "react";
import styled from "styled-components";

import LoadingKettlebell from "../../svgs/LoadingKettlebell";
import SyncingTransition from "../../Animations/ReactTransitions/SyncingTransition";

const SyncingIndicator = ({ isSyncing, syncMessage }) => {
  return (
    <SyncingTransition component={null} isSyncing={isSyncing}>
      <SyncContainer>
        <LoadingAni />
        <SyncLabel secondary>{syncMessage}</SyncLabel>
      </SyncContainer>
    </SyncingTransition>
  );
};

export default SyncingIndicator;

const SyncContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 8px 12px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  background: rgba(16, 16, 16, 0.6);
  border: 2px solid ${props => props.theme.tertiaryAccent};
  border-radius: 50px;
  z-index: 50;
`;

const SyncLabel = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: #f8f8f8;
`;

const LoadingAni = styled(LoadingKettlebell)`
  width: 20px;
`;
