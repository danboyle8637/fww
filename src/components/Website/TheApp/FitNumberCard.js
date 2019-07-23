import React, { useEffect } from "react";
import styled from "styled-components";

import ProgressFitNumber from "../../../svgs/ProgressFitNumber";
import { SetBodyText } from "../../../styles/BodyText";
import useCounter from "../../../hooks/useCounter";
import useSVGObserver from "../../../hooks/useSVGObserver";

const FitNumberCard = ({ fitNumber, description }) => {
  const [setDuration, setMaxCount, setPlay, setCounter, count] = useCounter();
  const [setSVGNode, runAnimation] = useSVGObserver({
    rootMargin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    setDuration(100);
    setMaxCount(fitNumber);
  }, []);

  useEffect(() => {
    if (runAnimation) {
      setPlay(true);
    } else {
      setCounter(0);
    }
  }, [runAnimation]);

  return (
    <FitNumberContainer ref={setSVGNode}>
      <FitNumberGrid>
        <BackgroundFitNumber gradientId={fitNumber} fitNumber={fitNumber} />
        <FitNumber>{count}</FitNumber>
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
