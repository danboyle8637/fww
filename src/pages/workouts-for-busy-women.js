import React from "react";

import LeadSection from "../components/Website/WhatWeDo/Reason1/LeadSection";
import DesignStatementSection from "../components/Website/WhatWeDo/Reason1/DesignStatementSection";
import TimerSection from "../components/Website/WhatWeDo/Reason1/TimerSection";
import MicroHITSection from "../components/Website/WhatWeDo/Reason1/MicroHITSection";
import siteConfig from "../utils/siteConfig";
import WorkoutsBusyWomenImage from "../images/FacebookShare/workouts-for-busy-women-fb-share.jpg";
import SEO from "../components/seo";

const WorkoutsForBusyWomen = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.workoutsForBusyWomenPage.title}
        fbTitle={siteConfig.seo.workoutsForBusyWomenPage.fbTitle}
        description={siteConfig.seo.workoutsForBusyWomenPage.description}
        url={siteConfig.seo.workoutsForBusyWomenPage.url}
        image={WorkoutsBusyWomenImage}
      />
      <LeadSection />
      <DesignStatementSection />
      <TimerSection />
      <MicroHITSection />
    </>
  );
};

export default WorkoutsForBusyWomen;
