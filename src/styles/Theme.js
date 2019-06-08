import { css } from "styled-components"
import { getRems } from "../utils/helpers"

const sizes = {
  mobile: getRems(600),
  tablet: getRems(960),
  laptop: getRems(1440),
  ultraWide: getRems(1460),
}

const headlineWidths = {
  mobile: "100%",
  tablet: "43rem",
  laptop: "54rem",
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
  whiteText: "#f8f8f8",
  primaryAccent: "#5AFDF2",
  secondaryAccent: "#8B53F6",
  tertiaryAccent: "#B44CFF",
  footerBackground: "#26243E",
  footerAddressText: "#19191C",
}

export { above, darkTheme, sizes, headlineWidths }
