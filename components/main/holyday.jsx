import React, { useState } from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import TitleSection from "../helper/titleSection";

export default function HolyDay() {
  const [txt, setTxt] = useState([
    {
      txt: "... deinen Urlaub aktiv erleben willst",
    },
    {
      txt: "... die Natur entdecken und bewusst reisen willst",
    },
    {
      txt: "... lokale Anbieter unterstützen willst",
    },
    {
      txt: "... offen für neue Menschen und Kulturen bist",
    },
    {
      txt: "... dir keine Sorgen um die Qualität oder Organisation machen willst",
    },
  ]);
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div className="m-section">
      <div className={style.hol_container}>
        <div className="justify-end">
          <div className={style.img_hol}>
            <img
              className={style.bg_img_hold}
              src="/main/orange_full.svg"
              alt=""
            />
            <img className={style.image_hold} src="/main/hold_img.svg" alt="" />
          </div>
          <div className={style.detail_hol}>
            <TitleSection
              className={style.title_hold}
              title={t(s + "Ein Urlaub mit moverii passt zu dirwenn du…")}
            />
            {txt.map((v, i) => {
              return (
                <div className={`d-flex align-center`} key={i}>
                  <img src="/main/checked_green.svg" alt="" />
                  <p className="pl-1">{v.txt}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
