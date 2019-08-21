import React from "react";

import HeadlineSection from "../components/Website/About/HeadlineSection";
import LeadSection from "../components/Website/About/LeadSection";
import Kindal from "../components/Website/About/Kindal";
import Dan from "../components/Website/About/Dan";
import KindalQuestions from "../components/Website/About/KindalQuestions";
import DanQuestions from "../components/Website/About/DanQuestions";
import { ActiveCardStore } from "../context/ActiveSlideContext";
import {
  activeCardReducer,
  activeCardState,
} from "../reducers/activeCardReducer";
import { IsTweeningStore } from "../context/IsTweeningContext";
import { tweeningReducer, tweeningState } from "../reducers/isTweeningReducer";
import siteConfig from "../utils/siteConfig";
import AboutImage from "../images/FacebookShare/about-fb-share.jpg";
import SEO from "../components/seo";

const About = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.aboutPage.title}
        fbTitle={siteConfig.seo.aboutPage.fbTitle}
        description={siteConfig.seo.aboutPage.description}
        url={siteConfig.seo.aboutPage.url}
        image={AboutImage}
      />
      <HeadlineSection />
      <LeadSection />
      <Kindal />
      <ActiveCardStore
        reducer={activeCardReducer}
        initialState={activeCardState}
      >
        <IsTweeningStore reducer={tweeningReducer} initialState={tweeningState}>
          <KindalQuestions />
          <Dan />
          <DanQuestions />
        </IsTweeningStore>
      </ActiveCardStore>
    </>
  );
};

export default About;
