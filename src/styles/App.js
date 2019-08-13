import styled from "styled-components";
import { above } from "../styles/Theme";

const AppContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  ${above.tablet`
    width: 80%;
  `}
  ${above.ipadPro`
    width: 100%;
  `}
`;

// Add margin top and bottom to this
const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${above.ipadPro`
    padding: 0 0 120px 0;
  `}
`;

export { AppContentContainer, BaseContainer };
