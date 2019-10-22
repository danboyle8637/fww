import React, { useState } from "react";
import styled from "styled-components";

import ProgressFitNumber from "../../../svgs/ProgressFitNumber";
import { SetBodyText } from "../../../styles/BodyText";

const FitNumberCard = ({ fitNumber, description }) => {
  const [number, setNumber] = useState(0);

  return (
    <FitNumberContainer>
      <FitNumberGrid>
        <BackgroundFitNumber
          gradientId={fitNumber}
          fitNumber={fitNumber}
          setNumber={setNumber}
        />
        <FitNumber>{number}</FitNumber>
      </FitNumberGrid>
      <SetBodyText dangerouslySetInnerHTML={{ __html: description }} />
    </FitNumberContainer>
  );
};

export default FitNumberCard;

const FitNumberContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 20px;
`;

const FitNumberGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const BackgroundFitNumber = styled(ProgressFitNumber)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  width: 100px;
`;

const FitNumber = styled.p`
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  font-family: Montserrat, sans-serif;
  font-size: 34px;
  font-weight: 800;
  color: ${props => props.theme.tertiaryAccent};
  z-index: 1;
`;
