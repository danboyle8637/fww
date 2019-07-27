import React from "react";

import HeadlineSection from "../components/Website/WhatWeDo/HeadlineSection/HeadlineSection";
import TextMessageSection from "../components/Website/WhatWeDo/TextMessageSection/TextMessageSection";
import ReasonSection from "../components/Website/WhatWeDo/ReasonSection/ReasonSection";
import { IsTweeningStore } from "../context/IsTweeningContent";
import { tweeningReducer, tweeningState } from "../reducers/isTweeningReducer";

const WhatWeDo = () => {
  return (
    <>
      <HeadlineSection />
      <TextMessageSection />
      <IsTweeningStore initialState={tweeningState} reducer={tweeningReducer}>
        <ReasonSection />
      </IsTweeningStore>
    </>
  );
};

export default WhatWeDo;
