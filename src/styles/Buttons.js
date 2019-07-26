import styled from "styled-components";
import { Link } from "gatsby";

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
  max-width: 600px;
  cursor: pointer;
`;

const BlogButton = styled(Link)`
  margin: 0;
  padding: 8px 12px;
  background: ${props => props.theme.tertiaryAccent};
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.mainBackgroundColor};
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  width: 100%;
  max-width: 600px;
  cursor: pointer;
`;

const OutterButton = styled.a`
  margin: 0;
  padding: 8px 12px;
  background: ${props =>
    props.kettlebell ? props.theme.tertiaryAccent : props.theme.primaryAccent};
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.mainBackgroundColor};
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  width: 100%;
  max-width: 600px;
  cursor: pointer;
`;

export { InnerButton, OutterButton, BlogButton };
