import React from "react";

import HeadlineSection from "../components/Website/Home/HeadlineSection";
import siteConfig from "../utils/siteConfig";
import HomeImage from "../images/FacebookShare/home-fb-share.jpg";
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO
      pageTitle={siteConfig.seo.homePage.title}
      fbTitle={siteConfig.seo.homePage.fbTitle}
      description={siteConfig.seo.homePage.description}
      url={siteConfig.seo.homePage.url}
      image={HomeImage}
    />
    <HeadlineSection />
  </>
);

export default IndexPage;
