import React from "react"

import { Headline1 } from "../../../styles/Headlines"
import { NodeContainer } from "../../../styles/Containers"

const Headline = () => {
  return (
    <NodeContainer setMobileWidth={220}>
      <Headline1 primary small>
        A fresh take on intense workouts and healthy meal planning for modern
        day, busy women.
      </Headline1>
    </NodeContainer>
  )
}

export default Headline
