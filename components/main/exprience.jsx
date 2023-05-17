import React from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import TitleSection from "../helper/titleSection";
export default function Experience() {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div className={style.experience_container}>
      <div className={style.video_exp_box}>
        <div className={style.play_exp_box}>
          <div className={style.play_icon}>
            <img className={style.ds1} src="/main/ds1.svg" alt="" />
            <img src="/main/ds2.svg" className={style.ds2} alt="" />
            <img style={{ paddingLeft: "3px" }} src="/main/play.svg" alt="" />
          </div>
        </div>
        <img src="/main/experience.svg" alt="" />
      </div>
      <div className={style.experience_detail}>
        <TitleSection title={t(s + "Erlebe die besondere Art zu Reisen")} />
        <p style={{ marginBottom: "20px" }}>{t(s + "des_experience")}</p>
        <div className={style.detail_exp_item}>
          <img
            style={{ paddingTop: "7px" }}
            src="/main/checked_green.svg"
            alt=""
          />
          <p className={`m-none ${style.txt_exp}`}>
            Mit unserer quailitätsgeprüften Auswahl aus über 300 Reisen findest
            du garantiert die beste Reise für dich und deine Bedürfnisse.
          </p>
        </div>

        <div className={style.detail_exp_item}>
          <img
            style={{ paddingTop: "7px" }}
            src="/main/checked_green.svg"
            alt=""
          />
          <p className={`m-none ${style.txt_exp}`}>
            Im Preis enthalten sind immer die Unterkunft, das Sportprogramm und
            die Ausrüstung; Je nach Reise auch die Verpflegung und weitere
            Leistungen.
          </p>
        </div>

        <div className={style.detail_exp_item}>
          <img
            style={{ paddingTop: "7px" }}
            src="/main/checked_green.svg"
            alt=""
          />
          <p className={`m-none ${style.txt_exp}`}>
            Für das Sport- & Aktivprogramm hast du immer einen qualifizierten
            Lehrer an deiner Seite.
          </p>
          {/* Inspiration für deinen aktiven Urlaub */}
        </div>
      </div>
    </div>
  );
}
