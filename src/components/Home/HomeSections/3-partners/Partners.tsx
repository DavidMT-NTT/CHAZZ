import React from "react";

import home from "../../../../content/pages/home.json";
import { IHomeSection } from "../../../../interfaces/interfaces";
import partners from "../../../../content/partners.json";
import { IPartner } from "../../../../interfaces/interfaces";

import { Container } from "react-bootstrap";
import "./Partners.styles.scss";

export const Partners = () => {
  const typedSection: IHomeSection = home.partners;

  return (
    <>
      <div className="partner-section">
        <Container id="Partners">
          <h3>{typedSection.title}</h3>
          <div className="partner-container">
            {partners.map((partner: IPartner, index) => (
              <div className="partner" key={index}>
                <a href={partner.website}>
                  <img className="partner-logo" src={partner.logo} alt={partner.name} width="100%" />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};