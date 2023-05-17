import React from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import Searchoffer from "./searchOffer";
export default function Sportat() {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div className={style.sportat_bg}>
      {/* <img className={style.img_sportat} src="/main/nat.svg" alt="" /> */}
      <div className={style.detail_sportat}>
        <h1 className={`mb-1 ${style.title_sportat}`}>
          {t(s + "Erlebe.Aktiven.Urlaub.")}
        </h1>
        <h3 className={`m-none ${style.category_sportat}`}>
          Surfen • Yoga • Wandern • Fitness • Kampfsport.
        </h3>
        <div style={{ marginTop: "145px" }}>
          <Searchoffer />
        </div>
      </div>
    </div>
  );
}
