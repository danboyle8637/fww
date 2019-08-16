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

const PodcastButton = styled.a`
  margin: 0 0 40px 0;
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.background};
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  color: ${props => props.color};
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  width: 100%;
  max-width: 600px;
  cursor: pointer;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.3);
  &:last-child {
    margin-bottom: 0;
  }
`;

const FormButton = styled.button`
  margin: 0;
  padding: 8px 12px;
  background: ${props =>
    props.kettlebell ? props.theme.tertiaryAccent : props.theme.primaryAccent};
  border: none;
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

export { InnerButton, OutterButton, BlogButton, FormButton, PodcastButton };
