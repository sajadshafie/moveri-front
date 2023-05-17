import React from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import TitleSection from "../helper/titleSection";
import SliderInsp from "../helper/sliderInsp";
export default function Inspiration() {
  const { t } = useTranslation();
  const s = "common:main.";
  const insp = [
    {
      image1: "/main/insp1.svg",
      des1: "Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents",
      image2: "/main/insp2.svg",
      des2: "Wanderurlaub: Erlebe die Natur von ihrer schönsten Seite",
      image3: "/main/insp3.svg",
      des3: "Aktivurlaub: Unvergessliche Erlebnisse in der Natur",
      image4: "/main/insp4.svg",
      des4: "Surfcamps in Portugal: Erlebe die besten Wellen Europas",
      image5: "/main/insp5.svg",
      des5: "Surfcamps in Frankreich: Erlebe Sonne, Wellen und gute Laune",
      image6: "/main/insp6.svg",
      des6: "Yoga Retreats: Abschalten, Energie tanken und glücklich sein",
    },
    {
      image1: "/main/insp1.svg",
      des1: "Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents",
      image2: "/main/insp2.svg",
      des2: "Wanderurlaub: Erlebe die Natur von ihrer schönsten Seite",
      image3: "/main/insp3.svg",
      des3: "Aktivurlaub: Unvergessliche Erlebnisse in der Natur",
      image4: "/main/insp4.svg",
      des4: "Surfcamps in Portugal: Erlebe die besten Wellen Europas",
      image5: "/main/insp5.svg",
      des5: "Surfcamps in Frankreich: Erlebe Sonne, Wellen und gute Laune",
      image6: "/main/insp6.svg",
      des6: "Yoga Retreats: Abschalten, Energie tanken und glücklich sein",
    },
  ];
  return (
    <div className={style.inp_container}>
      <TitleSection title={t(s + "Inspiration für deinen aktiven Urlaub")} />
      <SliderInsp data={insp} />
    </div>
  );
}
