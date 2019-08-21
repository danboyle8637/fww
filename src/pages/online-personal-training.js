import React from "react";

import LeadSection from "../components/Website/WhatWeDo/Reason3/LeadSection";
import KindalAlex from "../components/Website/WhatWeDo/Reason3/KindalAlex";
import NagSection from "../components/Website/WhatWeDo/Reason3/NagSection";
import EndSection from "../components/Website/WhatWeDo/Reason3/EndSection";
import siteConfig from "../utils/siteConfig";
import OnlineTrainingImage from "../images/FacebookShare/online-training-fb-share.jpg";
import SEO from "../components/seo";

const BeginnerWorkoutsToAdvanced = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.onlinePersonalTrainingPage.title}
        fbTitle={siteConfig.seo.onlinePersonalTrainingPage.fbTitle}
        description={siteConfig.seo.onlinePersonalTrainingPage.description}
        url={siteConfig.seo.onlinePersonalTrainingPage.url}
        image={OnlineTrainingImage}
      />
      <LeadSection />
      <KindalAlex />
      <NagSection />
      <EndSection />
    </>
  );
};

export default BeginnerWorkoutsToAdvanced;
