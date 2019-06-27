import React from "react";

import HeadlineSection from "../components/Website/About/HeadlineSection";
import LeadSection from "../components/Website/About/LeadSection";
import Kindal from "../components/Website/About/Kindal";
import Dan from "../components/Website/About/Dan";
import KindalQuestions from "../components/Website/About/KindalQuestions";
import DanQuestions from "../components/Website/About/DanQuestions";

const About = () => {
  return (
    <>
      <HeadlineSection />
      <LeadSection />
      <Kindal />
      <KindalQuestions />
      <Dan />
      <DanQuestions />
    </>
  );
};

export default About;
