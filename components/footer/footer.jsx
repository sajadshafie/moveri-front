import React from "react";
import { useTranslation } from "react-i18next";
import Company from "./company";
import Info from "./info";
import Links from "./links";
import Provide from "./provide";
import SocialBox from "./socialBox";

export default function Footer() {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src="/main/logo.svg" alt="" />
      </div>
      <div className="d-flex align-start justify-space">
        <Info />
        <Links />
        <div className="right-footer">
          <div className="d-flex align-start ml-3 mb-2 ">
            <Company />
            <Provide />
          </div>
          <SocialBox />
        </div>
      </div>
    </footer>
  );
}
