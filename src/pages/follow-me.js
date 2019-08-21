import React from "react";

import LeadSection from "../components/Website/FollowMe/LeadSection";
import CardSection from "../components/Website/FollowMe/CardSection";
import siteConfig from "../utils/siteConfig";
import FollowMeImage from "../images/FacebookShare/follow-me-fb-share.jpg";
import SEO from "../components/seo";

const FollowMe = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.followMePage.title}
        fbTitle={siteConfig.seo.followMePage.fbTitle}
        description={siteConfig.seo.followMePage.description}
        url={siteConfig.seo.followMePage.url}
        image={FollowMeImage}
      />
      <LeadSection />
      <CardSection />
    </>
  );
};

export default FollowMe;
