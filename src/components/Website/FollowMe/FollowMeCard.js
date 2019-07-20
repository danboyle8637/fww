import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import { SetBodyText } from "../../../styles/BodyText";
import { OutterButton } from "../../../styles/Buttons";
import FollowInstagram from "../../../svgs/FollowInstagram";
import FollowPodcast from "../../../svgs/FollowPodcast";
import FollowYouTube from "../../../svgs/FollowYouTube";
import FollowFacebook from "../../../svgs/FollowFacebook";
import CardHeadline from "./Headlines/CardHeadline";

const FollowMeCard = ({ icon, headline, body }) => {
  const socialBanners = [
    {
      socialBanner: "instagram",
      component: <InstagramBanner />,
      buttonText: "Click to Follow",
    },
    {
      socialBanner: "podcast",
      component: <PodcastBanner />,
      buttonText: "Click to Subscribe",
    },
    {
      socialBanner: "youtube",
      component: <YouTubeBanner />,
      buttonText: "Click to Subscribe",
    },
    {
      socialBanner: "facebook",
      component: <FacebookBanner />,
      buttonText: "Click to Follow",
    },
  ];

  const header = socialBanners.find(banner => banner.socialBanner === icon);

  return (
    <CardContainer>
      <SocialBanner>{header.component}</SocialBanner>
      <ContentWrapper>
        <div>
          <CardHeadline headline={headline} />
          <SetBodyText
            setMobileMarginTop={20}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
        <ElementContainer setMobileMarginTop={40}>
          <OutterButton href="">{header.buttonText}</OutterButton>
        </ElementContainer>
      </ContentWrapper>
    </CardContainer>
  );
};

export default FollowMeCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.baseBackgroundColor};
  border-radius: 8px;
`;

const SocialBanner = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding: 30px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const InstagramBanner = styled(FollowInstagram)`
  border-radius: 8px 8px 0 0;
  width: 100%;
`;

const PodcastBanner = styled(FollowPodcast)`
  border-radius: 8px 8px 0 0;
  width: 100%;
`;

const YouTubeBanner = styled(FollowYouTube)`
  border-radius: 8px 8px 0 0;
  width: 100%;
`;

const FacebookBanner = styled(FollowFacebook)`
  border-radius: 8px 8px 0 0;
  width: 100%;
`;
