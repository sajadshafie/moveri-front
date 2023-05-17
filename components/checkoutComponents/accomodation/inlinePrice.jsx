import React from "react";
import style from "../../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
export default function InlinePrice({
  label,
  price,
  classLabel = "main-color",
  classPrice = style.price_acc,
}) {
  const { t } = useTranslation();
  const s = "common:checkout.";
  return (
    <div className={`d-flex align-center mb-1`}>
      <p className={`${classLabel} m-none pr-1`}>{label}</p>
      <div className={`flex-auto ${style.line_dashed}`}></div>
      <p className={`m-none ${classPrice} pl-1`}>{price}</p>
    </div>
  );
}
