import React, { useContext, useEffect, useState } from "react";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import Headline2 from "./Headlines/Headline2";
import ResetCardsMobile from "./ResetCardsMobile";
import ResetCardsAboveMobile from "./ResetCardsAboveMobile";
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

const ResetCardsSection = () => {
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
        <Headline2 />
      </ContentContainer>
      <ActiveCardStore
        reducer={activeCardReducer}
        initialState={activeCardState}
      >
        <IsTweeningStore initialState={tweeningState} reducer={tweeningReducer}>
          {isMobile ? <ResetCardsMobile /> : <ResetCardsAboveMobile />}
        </IsTweeningStore>
      </ActiveCardStore>
    </SectionContainer>
  );
};

export default ResetCardsSection;
