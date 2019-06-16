import React from "react";

import HeadlineSection from "../components/Website/Ignite/HeadlineSection";
import LeadSection from "../components/Website/Ignite/LeadSection";
import PictureMiddleSection from "../components/Website/Ignite/PictureMiddleSection";
import BenefitsSection from "../components/Website/Ignite/BenefitsSection";
import VideoPreviewSection from "../components/Shared/VideoPreviewSection";
import ResetSection from "../components/Website/Ignite/ResetSection";
import PictureEndSection from "../components/Website/Ignite/PictureEndSection";

const IgniteStrengthForBeginners = () => {
  return (
    <>
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
