import React from "react";

import home from "../../../content/pages/home/home.json";
import { BottomBar, CompanyInfo } from "./index";

import "./Footer.styles.scss";

export const Footer = () => {
  const footerData = home.footer;

  return (
    <footer>
      <CompanyInfo {...footerData} />
      <BottomBar />
    </footer>
  );
};
