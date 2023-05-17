import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../../styles/checkout.module.css";
import TitleSection from "../../helper/titleSection";
import AccomodationSlider from "./../../helper/accomodationSlider";
import AccomodationTotal from "./accomodationTotal";
export default function BoxShared() {
  const [data, setData] = useState([
    {
      image: "/checkout/acc_slider1.svg",
    },
    {
      image: "/checkout/acc_slider2.svg",
    },
    {
      image: "/checkout/acc_slider3.svg",
    },
  ]);
  const { t } = useTranslation();
  const s = "common:checkout.";
  return (
    <div className={style.accomodations_boxs}>
      <div className={"d-flex "}>
        <div style={{ width: "220px", height: "150px", marginRight: "20 px" }}>
          <AccomodationSlider data={data} />
        </div>
        <div className="ml-2 mb-2">
          <div className="d-flex align-center justify-space">
            <TitleSection
              title={t(s + "Geteiltes 2-Bettzimmer im Local House")}
              className={style.title_boxs_}
            />
            <span className={style.shared_box}>{t(s + "Shared")}</span>
          </div>
          <p>{t(s + "des_box1_step1")}</p>
          <div className="d-flex">
            <span className={style.arrow_up_txt}>
              {t(s + "Weniger anzeigen")}
            </span>
            <img className="pl-1" src="/checkout/arrow_up.svg" alt="" />
          </div>
        </div>
      </div>
      <AccomodationTotal countRoom={data.length} />
    </div>
  );
}
