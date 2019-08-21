import React from "react";

import HeadlineSection from "../components/Website/TheApp/HeadlineSection";
import LeadSection from "../components/Website/TheApp/LeadSection";
import Section1 from "../components/Website/TheApp/Section1";
import Section2 from "../components/Website/TheApp/Section2";
import Section3 from "../components/Website/TheApp/Section3";
import Section4 from "../components/Website/TheApp/Section4";
import Section5 from "../components/Website/TheApp/Section5";
import Section6 from "../components/Website/TheApp/Section6";
import AppBetaSection from "../components/Website/TheApp/AppBetaSection";
import siteConfig from "../utils/siteConfig";
import TheAppImage from "../images/FacebookShare/the-app-fb-share.jpg";
import SEO from "../components/seo";

const TheApp = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.theAppPage.title}
        fbTitle={siteConfig.seo.theAppPage.fbTitle}
        description={siteConfig.seo.theAppPage.description}
        url={siteConfig.seo.theAppPage.url}
        image={TheAppImage}
      />
      <HeadlineSection />
      <LeadSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <AppBetaSection />
    </>
  );
};

export default TheApp;
