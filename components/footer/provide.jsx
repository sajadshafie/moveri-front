import React from "react";
import { useTranslation } from "react-i18next";
export default function Provide() {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div className="provide-container">
      <p>{t(s + "Unsere Kunden bewerten uns mit SEHR GUT!")}</p>
      <div style={{ height: "45px" }} className="d-flex align-center">
        <img
          style={{ height: "100%" }}
          className="mr-2"
          src="/main/provid1.svg"
          alt=""
        />
        <img src="/main/provid2.svg" alt="" />
      </div>
    </div>
  );
}
