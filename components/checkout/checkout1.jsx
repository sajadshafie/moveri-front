import React from "react";
import { useTranslation } from "react-i18next";
import style from "../../styles/checkout.module.css";
import BoxShared from "./../checkoutComponents/accomodation/boxShared";
import BoxPrivate from "../checkoutComponents/accomodation/boxPrivate";
import StepHandler from "./../checkoutComponents/stepHandler";
export default function Checkout1(props) {
  const { t } = useTranslation();
  const s = "common:checkout.";
  console.log(props.controller.step);
  return (
    <div className={style.acc_container}>
      <p className="main-color">{t(s + "checkout_step1_txt1")}</p>
      <div className="mb-3">
        <BoxShared />
      </div>
      <BoxPrivate />
      <StepHandler onNext={props.onNext} onBack={props.onBack} />
    </div>
  );
}
