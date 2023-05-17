import React from "react";
import Comminity from "./comminity";
import { useTranslation } from "react-i18next";

export default function Sectioncomminity() {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <section className="d-flex comminity-container">
      <Comminity
        link="/"
        src="/main/like_white.svg"
        title={t(s + "100% Rückerstattung")}
        description={t(s + "des_comminity_one")}
        textLink={t(s + "Zu den Details")}
      />
      <Comminity
        link="/"
        src="/main/start_white.svg"
        title={t(s + "Qualitätsgeprüfte Reisen")}
        description={t(s + "des_comminity_two")}
        textLink={t(s + "Zu den Details")}
      />
      <Comminity
        link="/"
        src="/main/heart_white.svg"
        title={t(s + "Persönliche Beratung")}
        description={t(s + "des_comminity_two")}
        textLink={t(s + "Zu den Details")}
      />
    </section>
  );
}
