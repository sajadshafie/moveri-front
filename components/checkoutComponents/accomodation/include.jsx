import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../../styles/checkout.module.css";
import ImgInlineTxt from "./../../helper/imgInlineTxt";

export default function Include() {
  const [includes, setIncluds] = useState([
    {
      text: "include1",
    },
    {
      text: "include2",
    },
    {
      text: "include3",
    },
    {
      text: "include4",
    },
    {
      text: "include5",
    },
  ]);
  const { t } = useTranslation();
  const s = "common:checkout.";
  return (
    <div className={`${style.accomodations_container} `}>
      <h3 className={`main-color ${style.title_contact}`}>
        {t(s + "include_title")}
      </h3>
      {includes.map((v, i) => {
        return (
          <div key={i} className="mb-1">
            <ImgInlineTxt
              src={"/checkout/checked_blue.svg"}
              text={t(s + v.text)}
            />
          </div>
        );
      })}
    </div>
  );
}
