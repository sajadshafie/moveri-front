import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
const MultipleSlidesExample = (props) => {
  const { t } = useTranslation();
  const s = "common:main.";
  const properties = {
    duration: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    indicators: true,
  };

  return (
    <div style={{ width: "85%", margin: "0 auto", position: "relative" }}>
      <h2 className={style.title_discover}>{t(s + "Beliebte Reiseziele")}</h2>
      <Slide {...properties}>
        {props.data.map((v, i) => {
          return (
            <div className={style.discover_item_half}>
              <img src={v.image} alt="" />
              <div className={style.detail_offer}>
                <h5 className={style.title_discover_item}>{v.title}</h5>
                <span>{v.offer} offer</span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default MultipleSlidesExample;
