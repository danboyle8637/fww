import React from "react";

import LeadSection from "../components/Website/Programs/LeadSection";
import ResetCardsSection from "../components/Website/Programs/ResetCardsSection";
import BigThreeCardsSection from "../components/Website/Programs/BigThreeCardsSection";
import siteConfig from "../utils/siteConfig";
import ProgramsImage from "../images/FacebookShare/programs-fb-share.jpg";
import SEO from "../components/seo";

const Programs = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.programsPage.title}
        fbTitle={siteConfig.seo.programsPage.fbTitle}
        description={siteConfig.seo.programsPage.description}
        url={siteConfig.seo.programsPage.url}
        image={ProgramsImage}
      />
      <LeadSection />
      <ResetCardsSection />
      <BigThreeCardsSection />
    </>
  );
};

export default Programs;
