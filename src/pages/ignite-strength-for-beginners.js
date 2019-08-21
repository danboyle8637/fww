import React from "react";

import HeadlineSection from "../components/Website/Ignite/HeadlineSection";
import LeadSection from "../components/Website/Ignite/LeadSection";
import PictureMiddleSection from "../components/Website/Ignite/PictureMiddleSection";
import BenefitsSection from "../components/Website/Ignite/BenefitsSection";
import VideoPreviewSection from "../components/Shared/VideoPreviewSection";
import ResetSection from "../components/Website/Ignite/ResetSection";
import PictureEndSection from "../components/Website/Ignite/PictureEndSection";
import siteConfig from "../utils/siteConfig";
import IgniteImage from "../images/FacebookShare/ignite-fb-share.jpg";
import SEO from "../components/seo";

const IgniteStrengthForBeginners = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.ignitePage.title}
        fbTitle={siteConfig.seo.ignitePage.fbTitle}
        description={siteConfig.seo.ignitePage.description}
        url={siteConfig.seo.ignitePage.url}
        image={IgniteImage}
      />
      <HeadlineSection />
      <LeadSection />
      <PictureMiddleSection />
      <BenefitsSection />
      <VideoPreviewSection
        program={"ignite"}
        buttonText={"Join the 7 Day Ignite Reset"}
      />
      <ResetSection />
      <PictureEndSection />
    </>
  );
};

export default IgniteStrengthForBeginners;
