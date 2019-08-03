import { createGlobalStyle } from "styled-components";
import { above } from "../styles/Theme";

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.mainBackgroundColor};
    /* ${above.tablet`
      background-color: ${props => props.theme.baseBackgroundColor};
    `} */
    ${above.ipadPro`
      background-color: ${props => props.theme.baseBackgroundColor};
    `}
    ${above.laptop`
      background-color: ${props => props.theme.baseBackgroundColor};
    `}
  }
`;

export default Global;
