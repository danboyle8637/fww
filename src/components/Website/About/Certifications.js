import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import ScrollDownArrow from "../../Shared/ScrollDownArrow";

const Certifications = ({ kindal, dan }) => {
  const certs = [
    { id: 1, person: "both", cert: "NASM Certified Trainer" },
    { id: 2, person: "kindal", cert: "NASM Weight Loss Specialist" },
    { id: 3, person: "kindal", cert: "Women's Fitness Specialist" },
    { id: 4, person: "both", cert: "Kettlebell Athletics Coach" },
    { id: 5, person: "kindal", cert: "RKC Coach" },
  ];

  const kindalCerts = certs.map(cert => {
    const id = cert.id;
    const certification = cert.cert;
    return <Certs key={id}>{certification}</Certs>;
  });

  const danCerts = certs
    .filter(obj => obj.person === "both")
    .map(cert => {
      const id = cert.id;
      const certification = cert.cert;
      return <Certs key={id}>{certification}</Certs>;
    });

  return (
    <ElementContainer column setMobileMarginTop={8}>
      {kindal && kindalCerts}
      {dan && danCerts}
      <ScrollDownArrow />
    </ElementContainer>
  );
};

export default Certifications;

const Certs = styled.p`
  margin: 0 0 2px 0;
  padding: 0;
  font-size: 13px;
  color: ${props => props.theme.accentBackgroundColor};
  text-transform: uppercase;
  letter-spacing: 1.6px;
  transform: translateX(3px);
  &:last-child {
    margin-bottom: 0;
  }
`;
