import React from "react";

import HeadlineSection from "../components/Website/PodcastChannels/HeadlineSection";
import PodcastButtons from "../components/Website/PodcastChannels/PodcastButtons";
import siteConfig from "../utils/siteConfig";
import PodcastImage from "../images/FacebookShare/podcast-channels-fb-share.jpg";
import SEO from "../components/seo";

const PodcastChannels = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.podcastChannelPage.title}
        fbTitle={siteConfig.seo.podcastChannelPage.fbTitle}
        description={siteConfig.seo.podcastChannelPage.description}
        url={siteConfig.seo.podcastChannelPage.url}
        image={PodcastImage}
      />
      <HeadlineSection />
      <PodcastButtons />
    </>
  );
};

export default PodcastChannels;
