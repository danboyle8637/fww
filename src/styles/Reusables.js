import { css } from "styled-components";
import { above } from "../styles/Theme";

const setMarginTop = css`
  margin-top: ${props => `${props.setMobileMarginTop}px`};
  ${above.mobile`
    margin-top: ${props => `${props.setTabletMarginTop}px`};
  `}
  ${above.tablet`
    margin-top: ${props => `${props.setLaptopMarginTop}px`};
  `}
`;

export { setMarginTop };
