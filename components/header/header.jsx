import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <header className="header-main">
      <ul className="list-item">
        <li className="img-logo">
          <img src="/main/logo.svg" alt="" />
        </li>
        <li>{t(s + "faqs")}</li>
        <li>{t(s + "Kontakt")}</li>
        <li>{t(s + "Blog")}</li>
        <li>{t(s + "Anmelden")}</li>
      </ul>
      <div className="d-flex option-moveri">
        <img className="px-3" src="/main/search.svg" alt="" />
        <img className="px-3" src="/main/like.svg" alt="" />
        <button className="main-btn">{t(s + "Registrieren")}</button>
      </div>
    </header>
  );
}
