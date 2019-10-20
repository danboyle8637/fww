import { createGlobalStyle } from "styled-components";
import { above } from "./Theme";

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5 {
    font-family: Roboto;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.mainBackgroundColor};
    ${above.mobile`
      background-color: ${props =>
        props.blog === "blog"
          ? props.theme.baseBackgroundColor
          : props.theme.mainBackgroundColor};
    `}
    ${above.ipadPro`
      background-color: ${props => props.theme.baseBackgroundColor};
    `}
    ${above.laptop`
      background-color: ${props => props.theme.baseBackgroundColor};
    `}
  }
`;

export default Global;
