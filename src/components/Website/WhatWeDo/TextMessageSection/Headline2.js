import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"

import { ElementContainer } from "../../../../styles/Containers"
import { Header3 } from "../../../../styles/Headlines"
import ScreenWidthContext from "../../../../context/ScreenWidthContext"

const Headline2 = () => {
  const device = useContext(ScreenWidthContext)
  const [showHeadline, setShowHeadline] = useState(false)

  useEffect(() => {
    if (device === "tablet" || device === "laptop" || device === "ultraWide") {
      setShowHeadline(true)
    }
  }, [device])

  return (
    <ElementContainer column>
      <Header3
        tertiary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        We take care of it so you can
      </Header3>
      <BaseLineWrapper>
        <Header3 primary mobileLarge upper>
          Focus
        </Header3>
        {showHeadline ? null : (
          <Header3 tertiary mobileMedium>
            on
          </Header3>
        )}
        {showHeadline ? (
          <Header3 tertiary mobileMedium>
            on everything else
          </Header3>
        ) : null}
      </BaseLineWrapper>
      {showHeadline ? null : (
        <Header3
          tertiary
          mobileMedium
          setMLineHeight={1.4}
          setTLineHeight={1.4}
          setLLineHeight={1.4}
        >
          everything else
        </Header3>
      )}
      <BaseLineWrapper>
        <Header3 tertiary mobileMedium>
          that
        </Header3>
        <Header3 primary mobileLarge upper>
          Matters
        </Header3>
      </BaseLineWrapper>
      <Header3
        tertiary
        mobileMedium
        setMLineHeight={1.4}
        setTLineHeight={1.4}
        setLLineHeight={1.4}
      >
        in your life!
      </Header3>
    </ElementContainer>
  )
}

export default Headline2

const BaseLineWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 8px;
  align-items: end;
`
