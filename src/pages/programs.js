import React, { useContext, useEffect, useState } from "react";

import { SectionContainer } from "../styles/Containers";
import ProgramsMobile from "../components/Website/Programs/ProgramsMobile";
import ProgramsAboveMobile from "../components/Website/Programs/ProgramsAboveMobile";
import ScreenWidthContent from "../context/ScreenWidthContext";
import { IsTweeningStore } from "../context/IsTweeningContext";
import { tweeningReducer, tweeningState } from "../reducers/isTweeningReducer";

const Programs = () => {
  const device = useContext(ScreenWidthContent);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (device === "mobile") {
      setIsMobile(true);
    }
  }, [device]);

  return (
    <SectionContainer setMobileMarginTop={"0"} setMobileMarginBottom={"0"}>
      <IsTweeningStore initialState={tweeningState} reducer={tweeningReducer}>
        {isMobile ? <ProgramsMobile /> : <ProgramsAboveMobile />}
      </IsTweeningStore>
    </SectionContainer>
  );
};

export default Programs;
