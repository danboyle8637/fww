import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import FacebookIcon from "../../../svgs/FacebookIcon";
import InstagramIcon from "../../../svgs/InstagramIcon";
import YouTubeIcon from "../../../svgs/YouTubeIcon";
import PodcastIcon from "../../../svgs/PodcastIcon";

const SocialIcons = () => {
  return (
    <SocialIconContainer>
      <SocialLink
        href="https://facebook.com/fitwomensweekly"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Facebook />
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/trainerkindal/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Instagram />
      </SocialLink>
      <SocialLink
        href="https://www.youtube.com/c/KindalBoyle"
        rel="noopener noreferrer"
        target="_blank"
      >
        <YouTube />
      </SocialLink>
      <Link to={"/podcast-channels"}>
        <Podcast />
      </Link>
    </SocialIconContainer>
  );
};

export default SocialIcons;

const SocialIconContainer = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4, 30px);
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const Facebook = styled(FacebookIcon)`
  width: 100%;
  max-width: 5rem;
`;

const Instagram = styled(InstagramIcon)`
  width: 100%;
  max-width: 5rem;
`;

const YouTube = styled(YouTubeIcon)`
  width: 100%;
  max-width: 5rem;
`;

const Podcast = styled(PodcastIcon)`
  width: 100%;
  max-width: 5rem;
`;

const SocialLink = styled.a`
  margin: 0;
  padding: 0;
  line-height: 0;
  text-decoration: none;
`;
