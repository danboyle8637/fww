import React from "react";

import LeadSection from "../components/Website/WhatWeDo/Reason2/LeadSection";
import IgniteSection from "../components/Website/WhatWeDo/Reason2/IgniteSection";
import BBCSection from "../components/Website/WhatWeDo/Reason2/BBCSection";
import StrongSection from "../components/Website/WhatWeDo/Reason2/StrongSection";
import EndSection from "../components/Website/WhatWeDo/Reason2/EndSection";
import siteConfig from "../utils/siteConfig";
import FitnessLevelImage from "../images/FacebookShare/all-fitness-levels-fb-share.jpg";
import SEO from "../components/seo";

const BeginnerWorkoutsToAdvanced = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.beginnerToAdvancedWorkoutsPage.title}
        fbTitle={siteConfig.seo.beginnerToAdvancedWorkoutsPage.fbTitle}
        description={siteConfig.seo.beginnerToAdvancedWorkoutsPage.description}
        url={siteConfig.seo.beginnerToAdvancedWorkoutsPage.url}
        image={FitnessLevelImage}
      />
      <LeadSection />
      <IgniteSection />
      <BBCSection />
      <StrongSection />
      <EndSection />
    </>
  );
};

export default BeginnerWorkoutsToAdvanced;
