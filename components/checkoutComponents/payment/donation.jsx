import React, { useState } from "react";
import style from "../../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
import TitleSection from "./../../helper/titleSection";
import Radio from "./../../global/radio";

export default function Donation() {
  const { t } = useTranslation();
  const s = "common:checkout.";
  const [ozean, setOzean] = useState([
    {
      title: "OzeanKind",
      image: "/checkout/fish.svg",
      name: "oze",
      // active: false,
    },
    {
      title: "OzeanKind",
      image: "/checkout/fish.svg",
      name: "oze",
      // active: false,
    },
    {
      title: "OzeanKind",
      image: "/checkout/fish.svg",
      name: "oze",
      // active: false,
    },
    {
      title: "OzeanKind",
      image: "/checkout/fish.svg",
      name: "oze",
      // active: false,
    },
  ]);
  const handleOzean = (index) => {};
  return (
    <div>
      <TitleSection title={t(s + "Donation")} className={style.title_policy} />
      <div className={style.accomodations_boxs}>
        <div className="d-flex align-center mb-3">
          <Radio />
          <span>{t(s + "I want to donate charities.")}</span>
        </div>
        <div className="d-flex align-center">
          {ozean.map((v, i) => {
            return (
              <div
                onClick={() => handleOzean(i)}
                className={`${style.item_ozean} ${
                  i == ozean.length - 1 ? "" : "mr-1"
                }`}
              >
                <div>
                  <Radio name={v.name} checked={v.active} />
                </div>
                <div>
                  <img src={v.image} alt="" />
                  <p className="m-none">{v.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
