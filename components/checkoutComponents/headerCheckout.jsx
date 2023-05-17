import React from "react";
import style from "../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
import TitleSection from "./../helper/titleSection";
import SearchCheckout from "./searchCheckout";

export default function HeaderCheckout() {
  const { t } = useTranslation();
  const s = "common:checkout.";
  return (
    <div className={style.header_checkout}>
      <div>
        <TitleSection
          title={t(
            s + "Yoga- und Wander-Retreat zwischen den Fjorden Norwegens"
          )}
          className={style.title_text_header}
        />
        <SearchCheckout/>
      </div>
      <div>
        <div className={style.img_header}>
          <img src="/checkout/Vector.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
