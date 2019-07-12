// This is the footer of the Program card.
// This indicates an active program and current progress at a glance.
import React from "react";
import styled from "styled-components";

import ProgressIndicator from "../../../../svgs/ProgressIcon";

const ProgramInfoFooter = () => {
  return (
    <FooterGrid>
      <ActiveButtonWrapper>
        <ActiveButton />
        <ActiveInactive>Active</ActiveInactive>
      </ActiveButtonWrapper>
      <ProgressGrid>
        <PercentComplete>100%</PercentComplete>
        <ProgressGraph />
      </ProgressGrid>
    </FooterGrid>
  );
};

export default ProgramInfoFooter;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 30px;
  justify-items: end;
`;

const ProgressGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
`;

const ProgressGraph = styled(ProgressIndicator)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 54px;
`;

const PercentComplete = styled.p`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0;
  padding: 0;
  font-size: 11px;
  font-weight: 300;
  color: ${props => props.theme.primaryAccent};
  z-index: 1;
`;

const ActiveButtonWrapper = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
`;

const ActiveButton = styled.div`
  background: transparent;
  border: 2px solid ${props => props.theme.mainBackgroundColor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

const ActiveInactive = styled.p`
  margin: 0 0 0 6px;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
  text-transform: uppercase;
`;
