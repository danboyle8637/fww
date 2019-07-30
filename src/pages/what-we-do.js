import React from "react";

import HeadlineSection from "../components/Website/WhatWeDo/HeadlineSection/HeadlineSection";
import TextMessageSection from "../components/Website/WhatWeDo/TextMessageSection/TextMessageSection";
import ReasonSection from "../components/Website/WhatWeDo/ReasonSection/ReasonSection";
import { IsTweeningStore } from "../context/IsTweeningContext";
import { ActiveCardStore } from "../context/ActiveSlideContext";
import { tweeningReducer, tweeningState } from "../reducers/isTweeningReducer";
import {
  activeCardReducer,
  activeCardState,
} from "../reducers/activeCardReducer";

const WhatWeDo = () => {
  return (
    <>
      <HeadlineSection />
      <TextMessageSection />
      <ActiveCardStore
        reducer={activeCardReducer}
        initialState={activeCardState}
      >
        <IsTweeningStore initialState={tweeningState} reducer={tweeningReducer}>
          <ReasonSection />
        </IsTweeningStore>
      </ActiveCardStore>
    </>
  );
};

export default WhatWeDo;
