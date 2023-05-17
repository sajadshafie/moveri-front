import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import style from "../../styles/main.module.css";
import TitleSection from "./titleSection";
import { useTranslation } from "react-i18next";

const PopularSlider = (props) => {
  const { t } = useTranslation();
  const s = "common:main.";
  const properties = {
    duration: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    // indicators: true,
  };
  const handleActive = (v) => {
    console.log(v);
    let classes = "";
    for (let i = 0; i > 5; i++) {
      if (i <= v) {
        classes = <div className="active-circle"></div>;
      } else {
        classes = <div className="deactive-circle"></div>;
      }
    }
    console.log(classes);
    return classes;
  };
  return (
    <div className={style.box_slider_ppl}>
      <TitleSection title={t(s + "Beliebte Reiseziele")} />
      <Slide {...properties}>
        {props.data.map((v, i) => {
          return (
            <div
              key={i}
              className={`${style.card_ppl} ${
                i == props.data.length - 1 ? "" : "mr-1"
              }`}
            >
              <div className={style.img_card_ppl}>
                <img className={style.img_res} src={v.image} alt="" />
              </div>
              <div className={style.detail_ppl}>
                <h4>{v.title}</h4>
                <div className="d-flex align-center">
                  <img className="pr-1" src="/main/location_blue.svg" alt="" />
                  <p>{v.location}</p>
                </div>
                <div className="d-flex align-center">
                  <img className="pr-1" src="/main/date_blue.svg" alt="" />
                  <p>{v.date}</p>
                </div>
                <div className={style.line_gray}></div>
                <div className="space-between mb-2">
                  <div className="d-flex align-center">
                    <img src="/main/logo_owl.svg" alt="" />
                    <div className="align-center d-flex pl-2">
                      <div className="active-circle"></div>
                      <div className="active-circle"></div>
                      <div className="active-circle"></div>
                    </div>
                  </div>
                  <div
                    className={style.reviews_ppl}
                  >{`(${v.count}) TripAdvisor Reise-Bewertungen`}</div>
                </div>
                <div className="space-between">
                  <p className={`${style.price_ppl} m-none`}>
                    Ab <b className={style.buld_price}>{v.price}$</b> Pro Nacht
                  </p>
                  <div className="d-flex align-center">
                    <span className={`${style.price_ppl} ${style.pad_sm}`}>
                      Im Preis enthalten
                    </span>
                    <img src="/main/shape.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default PopularSlider;
