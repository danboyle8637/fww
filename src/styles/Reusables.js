import { css } from "styled-components";
import { above } from "../styles/Theme";

const setMargin = css`
  margin-top: ${props => `${props.setMobileMarginTop}px` || 0};
  margin-bottom: ${props => `${props.setMobileMarginBottom}px` || 0};
  ${above.mobile`
    margin-top: ${props => `${props.setTabletMarginTop}px` || 0};
    margin-bottom: ${props => `${props.setTabletMarginBottom}px` || 0};
  `}
  ${above.tablet`
    margin-top: ${props => `${props.setIPadProMarginTop}px` || 0};
    margin-bottom: ${props => `${props.setIPadProMarginBottom}px` || 0};
  `}
  ${above.ipadPro`
    margin-top: ${props => `${props.setLaptopMarginTop}px` || 0};
    margin-bottom: ${props => `${props.setLaptopMarginBottom}px` || 0};
  `}
  ${above.laptop`
    margin-top: ${props => `${props.setWideScreenMarginTop}px` || 0};
    margin-bottom: ${props => `${props.setWideScreenMarginBottom}px` || 0};
  `}
`;

export { setMargin };
