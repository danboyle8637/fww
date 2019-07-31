import React, { useContext, useEffect, useState } from "react";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import Headline3 from "./Headlines/Headline3";
import ProgramsMobile from "./ProgramsMobile";
import ProgramsAboveMobile from "./ProgramsAboveMobile";
import ScreenWidthContent from "../../../context/ScreenWidthContext";
import { IsTweeningStore } from "../../../context/IsTweeningContext";
import { ActiveCardStore } from "../../../context/ActiveSlideContext";
import {
  tweeningReducer,
  tweeningState,
} from "../../../reducers/isTweeningReducer";
import {
  activeCardReducer,
  activeCardState,
} from "../../../reducers/activeCardReducer";

const BigThreeCardsSection = () => {
  const device = useContext(ScreenWidthContent);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (device === "mobile") {
      setIsMobile(true);
    }
  }, [device]);

  return (
    <SectionContainer>
      <ContentContainer>
        <Headline3 />
      </ContentContainer>
      <ActiveCardStore
        reducer={activeCardReducer}
        initialState={activeCardState}
      >
        <IsTweeningStore initialState={tweeningState} reducer={tweeningReducer}>
          {isMobile ? <ProgramsMobile /> : <ProgramsAboveMobile />}
        </IsTweeningStore>
      </ActiveCardStore>
    </SectionContainer>
  );
};

export default BigThreeCardsSection;
