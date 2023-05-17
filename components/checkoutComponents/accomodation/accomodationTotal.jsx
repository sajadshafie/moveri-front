import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../../styles/checkout.module.css";
import InputNumb from "../../helper/inputNumb";
import IconBordered from "./../../global/iconBordered";
export default function AccomodationTotal({
  countRoom,
  countAcc = "1",
  contentInfo,
  src,
  borderColor,
  containerClass,
  srcAccomodation = "/checkout/ppl.svg",
}) {
  const { t } = useTranslation();
  const s = "common:checkout.";
  const handleNumberRoom = (e) => {
    console.log(e);
  };
  const handleArrow = (e, i) => {
    console.log(e, i);
  };
  return (
    <div className={`space-between main-color ${containerClass}`}>
      <div className="d-flex align-center">
        <img className="pr-1" src={srcAccomodation} alt="" />
        <span>
          {t(s + "total_amount")}
          {countAcc}
          {t(s + "person_for")}
          {countRoom}
          {t(s + "night")}
        </span>
      </div>
      <div className="d-flex align-center">
        <div style={{ width: !contentInfo ? "150px" : "auto" }}>
          {!contentInfo ? (
            <InputNumb
              value={"1"}
              onChange={handleNumberRoom}
              handleArrow={handleArrow}
              numberDefault={1}
            />
          ) : (
            contentInfo
          )}
        </div>
        <div className="pl-2">
          <IconBordered src={src} borderColor={borderColor} />
        </div>
      </div>
    </div>
  );
}
