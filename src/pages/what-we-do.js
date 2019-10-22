import React from "react";

import HeadlineSection from "../components/Website/WhatWeDo/HeadlineSection/HeadlineSection";
import LeadSection from "../components/Website/WhatWeDo/TextMessageSection/LeadSection";
import ReasonSection from "../components/Website/WhatWeDo/ReasonSection/ReasonSection";
import { IsTweeningStore } from "../context/IsTweeningContext";
import { ActiveCardStore } from "../context/ActiveSlideContext";
import { tweeningReducer, tweeningState } from "../reducers/isTweeningReducer";
import {
  activeCardReducer,
  activeCardState,
} from "../reducers/activeCardReducer";
import siteConfig from "../utils/siteConfig";
import WhatWeDoImage from "../images/FacebookShare/what-we-do-fb-share.jpg";
import SEO from "../components/seo";

const WhatWeDo = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.whatWeDoPage.title}
        fbTitle={siteConfig.seo.whatWeDoPage.fbTitle}
        description={siteConfig.seo.whatWeDoPage.description}
        url={siteConfig.seo.whatWeDoPage.url}
        image={WhatWeDoImage}
      />
      <HeadlineSection />
      <LeadSection />
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
