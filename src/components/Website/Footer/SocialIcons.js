import React from "react"
import styled from "styled-components"

import FacebookIcon from "../../../svgs/FacebookIcon"
import InstagramIcon from "../../../svgs/InstagramIcon"
import YouTubeIcon from "../../../svgs/YouTubeIcon"
import PodcastIcon from "../../../svgs/PodcastIcon"

const SocialIcons = () => {
  return (
    <SocialIconContainer>
      <Facebook />
      <Instagram />
      <YouTube />
      <Podcast />
    </SocialIconContainer>
  )
}

export default SocialIcons

const SocialIconContainer = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4, 30px);
  gap: 40px;
  align-items: center;
  justify-content: center;
`

const Facebook = styled(FacebookIcon)`
  width: 100%;
  max-width: 5rem;
`

const Instagram = styled(InstagramIcon)`
  width: 100%;
  max-width: 5rem;
`

const YouTube = styled(YouTubeIcon)`
  width: 100%;
  max-width: 5rem;
`

const Podcast = styled(PodcastIcon)`
  width: 100%;
  max-width: 5rem;
`
