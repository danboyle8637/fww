import React from "react"
import styled from "styled-components"

import { ElementContainer } from "../../../../styles/Containers"
import { Header3 } from "../../../../styles/Headlines"
import { above } from "../../../../styles/Theme"

const Headline1 = () => {
  return (
    <HeadlineContainer>
      <Header3
        mobileMedium
        tertiary
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        When you need a
      </Header3>
      <ElementContainer column>
        <Header3 mobileLarge primary upper>
          Workout
        </Header3>
        <Header3 mobileLarge primary upper>
          Meal plan
        </Header3>
        <Header3 mobileLarge primary upper>
          Coaching
        </Header3>
        <Header3 mobileLarge primary upper>
          Pick me up
        </Header3>
      </ElementContainer>
    </HeadlineContainer>
  )
}

export default Headline1

const HeadlineContainer = styled.div`
  margin: 80px 0 0 0;
  align-self: start;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  ${above.mobile`
    align-self: center;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    column-gap: 10px;
  `}
`
