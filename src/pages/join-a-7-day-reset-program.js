import React from "react";

import HeadlineSection from "../components/Website/Join7DayReset/HeadlineSection";
import LeadSection from "../components/Website/Join7DayReset/LeadSection";
import MissionSection from "../components/Website/Join7DayReset/MissionSection";
import YouLearnSection from "../components/Website/Join7DayReset/YouLearnSection";
import YouGetSection from "../components/Website/Join7DayReset/YouGetSection";
import CTASection from "../components/Website/Join7DayReset/CTASection";
import FAQSection from "../components/Website/Join7DayReset/FAQSection";
import { faqState, reducer } from "../reducers/faqReducer";
import { FAQStore } from "../context/FAQContext";
import siteConfig from "../utils/siteConfig";
import ResetImage from "../images/FacebookShare/reset-fb-share.jpg";
import SEO from "../components/seo";

const JoinA7DayResetProgram = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.sevenDayResetPage.title}
        fbTitle={siteConfig.seo.sevenDayResetPage.fbTitle}
        description={siteConfig.seo.sevenDayResetPage.description}
        url={siteConfig.seo.sevenDayResetPage.url}
        image={ResetImage}
      />
      <HeadlineSection />
      <LeadSection />
      <MissionSection />
      <YouLearnSection />
      <YouGetSection />
      <CTASection />
      <FAQStore initialState={faqState} reducer={reducer}>
        <FAQSection />
      </FAQStore>
    </>
  );
};

export default JoinA7DayResetProgram;
