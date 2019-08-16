import React from "react";
import styled from "styled-components";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import { PodcastButton } from "../../../styles/Buttons";
import ITunesIcon from "../../../svgs/PodcastIcon";
import GooglePodcastIcon from "../../../svgs/GooglePodcastIcon";
import SpotifyPodcastIcon from "../../../svgs/SpotifyIcon";

const PodcastButtons = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <PodcastButton
          background={"#9731e0"}
          color={"#f8f8f8"}
          href="https://podcasts.apple.com/us/podcast/fit-womens-weekly-podcast/id622413963"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <ItunesIcon fill={"#f8f8f8"} stroke={"#f8f8f8"} />
          Listen on iTunes
        </PodcastButton>
        <PodcastButton
          background={"#4285F4"}
          color={"#f8f8f8"}
          href="https://play.google.com/store/apps/details?id=com.google.android.apps.podcasts&hl=en_US"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <GoogleIcon />
          Listen on Google
        </PodcastButton>
        <PodcastButton
          background={"#2ab758"}
          color={"#f8f8f8"}
          href="https://open.spotify.com/show/4K2zqJRgYyJ8SaGYRgtQUj"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <SpotifyIcon />
          Listen on Spotify
        </PodcastButton>
      </ContentContainer>
    </SectionContainer>
  );
};

export default PodcastButtons;

const ItunesIcon = styled(ITunesIcon)`
  margin-right: 10px;
  width: 20px;
`;

const GoogleIcon = styled(GooglePodcastIcon)`
  margin-right: 10px;
  width: 20px;
`;

const SpotifyIcon = styled(SpotifyPodcastIcon)`
  margin-right: 10px;
  width: 20px;
`;
