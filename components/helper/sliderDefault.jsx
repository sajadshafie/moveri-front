import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";

export default function SliderDefault(props) {
  const properties = {
    duration: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    // indicators: true,
  };
  return (
    <div style={{ width: "85%", margin: "0 auto", position: "relative" }}>
      <Slide {...properties}>
        {props.data.map((v, i) => {
          return <img key={i} src={v.image} alt="" />;
        })}
      </Slide>
    </div>
  );
}
