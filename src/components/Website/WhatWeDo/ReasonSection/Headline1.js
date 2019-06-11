import React from "react"
import styled from "styled-components"

import { ContentContainer } from "../../../../styles/Containers"
import FourIcon from "../../../../svgs/FourIcon"
import { Header3 } from "../../../../styles/Headlines"

const Headline1 = () => {
  return (
    <ContentContainer>
      <Four />
      <HeadlineWrapper>
        <Header3 tertiary mobileMedium>
          Reasons we're
        </Header3>
        <Header3 tertiary upper mobileLarge>
          The Best
        </Header3>
      </HeadlineWrapper>
    </ContentContainer>
  )
}

export default Headline1

const HeadlineWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Four = styled(FourIcon)`
  width: 200px;
`
