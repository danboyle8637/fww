import React from "react";

import HeadlineSection from "../components/Website/Strong/HeadlineSection";
import LeadSection from "../components/Website/Strong/LeadSection";
import KBClinicPictureSection from "../components/Website/Strong/KBClinicPictureSection";
import KBClinicSection from "../components/Website/Strong/KBClinicSection";
import WorkoutsPictureSection from "../components/Website/Strong/WorkoutsPictureSection";
import WorkoutsSection from "../components/Website/Strong/WorkoutsSection";
import VideoPreviewSection from "../components/Shared/VideoPreviewSection";
import ResetSection from "../components/Website/Strong/ResetSection";
import PictureEndSection from "../components/Website/Strong/PictureEndSection";
import siteConfig from "../utils/siteConfig";
import StrongImage from "../images/FacebookShare/strong-fb-share.jpg";
import SEO from "../components/seo";

const StrongKettlebellTraining = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.strongPage.title}
        fbTitle={siteConfig.seo.strongPage.fbTitle}
        description={siteConfig.seo.strongPage.description}
        url={siteConfig.seo.strongPage.url}
        image={StrongImage}
      />
      <HeadlineSection />
      <LeadSection />
      <KBClinicPictureSection />
      <KBClinicSection />
      <WorkoutsPictureSection />
      <WorkoutsSection />
      <VideoPreviewSection
        program={"strong"}
        buttonText={"Join the 7 day strong reset"}
        kettlebell={true}
      />
      <ResetSection />
      <PictureEndSection />
    </>
  );
};

export default StrongKettlebellTraining;
