import React, { useState } from "react";
import style from "../../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import Travel from "./travel";
import TitleSection from "../../helper/titleSection";
import Button from "../../global/button";
import SliderStories from "../../helper/sliderStories";

export default function Stories() {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div className={style.stores_container}>
      <Travel />
      <div className={style.latest_stories}>
        <TitleSection title={t(s + "Geschichten aus unserem Reisemagazin")} />
        <div className="d-flex">
          <div className={style.stories_slider}>
            <SliderStories />
          </div>
          <div className={style.detail_stories}>
            <TitleSection
              className={style.title_detail_stories}
              title={t(
                s +
                  "Surfcamps in EuropaEntdecke die Vielfalt unseres Kontinents"
              )}
            />
            <p className={style.des_p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
              purus viverra accumsan in nisl nisi Arcu cursus vitae congue
              mauris rhoncus aenean vel elit scelerisque In egestas erat
              imperdiet sed euismod nisi porta lorem mollis Morbi tristique
              senectus et netus Mattis pellentesque id nibh tortor id aliquet
              lectus proin Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum Ullamcorper velit sed ullamcorper morbi .
            </p>
            <Button
              content={t(s + "Readmore")}
              className={style.btn_read_more}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
