import React from "react";

import HeadlineSection from "../components/Website/BodyBurnChallenges/HeadlineSection";
import LeadSection from "../components/Website/BodyBurnChallenges/LeadSection";
import PictureMiddleSection from "../components/Website/BodyBurnChallenges/PictureMiddleSection";
import BenefitsSection from "../components/Website/BodyBurnChallenges/BenefitsSection";
import VideoPreviewSection from "../components/Shared/VideoPreviewSection";
import ResetSection from "../components/Website/BodyBurnChallenges/ResetSection";
import PictureEndSection from "../components/Website/BodyBurnChallenges/PictureEndSection";
import siteConfig from "../utils/siteConfig";
import BBCImage from "../images/FacebookShare/bbc-fb-share.jpg";
import SEO from "../components/seo";

const BodyBurnChallenges = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.bodyBurnChallengesPage.title}
        fbTitle={siteConfig.seo.bodyBurnChallengesPage.fbTitle}
        description={siteConfig.seo.bodyBurnChallengesPage.description}
        url={siteConfig.seo.bodyBurnChallengesPage.url}
        image={BBCImage}
      />
      <HeadlineSection />
      <LeadSection />
      <PictureMiddleSection />
      <BenefitsSection />
      <VideoPreviewSection
        program={"bbc"}
        buttonText={"Sign up for the 7 day BBC Reset"}
      />
      <ResetSection />
      <PictureEndSection />
    </>
  );
};

export default BodyBurnChallenges;
