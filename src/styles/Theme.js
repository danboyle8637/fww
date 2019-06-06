import { css } from "styled-components"

const sizes = {
  mobile: 600,
  tablet: 960,
  laptop: 1441,
}

// The only thing that will change above tablet will be the spacing
const above = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = (...args) => css`
    @media (min-width: ${sizes[size]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const darkTheme = {
  baseBackgroundColor: "#141414",
  mainBackgroundBorderColor: "#101010",
  mainBackgroundColor: "#19191C",
}

export { above, darkTheme }
