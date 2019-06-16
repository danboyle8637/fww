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

const StrongKettlebellTraining = () => {
  return (
    <>
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
