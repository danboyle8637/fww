import { css } from "styled-components"
import { getRems } from "../utils/helpers"

const sizes = {
  mobile: getRems(600),
  tablet: getRems(960),
  laptop: getRems(1442),
}

// The only thing that will change above tablet will be the spacing
const above = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = (...args) => css`
    @media (min-width: ${sizes[size]}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const darkTheme = {
  baseBackgroundColor: "#141414",
  mainBackgroundBorderColor: "#101010",
  mainBackgroundColor: "#19191C",
  headlinePrimary: "#545885",
  headlineSecondary: "#4D5D7E",
  bodyText: "#B3B6E1",
}

export { above, darkTheme, sizes }
