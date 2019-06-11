import styled from "styled-components"
import { Link } from "gatsby"

const InnerButton = styled(Link)`
  margin: 0;
  padding: 8px 12px;
  background: ${props => props.theme.primaryAccent};
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.mainBackgroundColor};
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  width: 100%;
  cursor: pointer;
`

export { InnerButton }
