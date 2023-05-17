import React, { useState } from "react";
import style from "../../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
import TitleSection from "./../../helper/titleSection";
import Radio from "../../global/radio";
import Input from "../../global/input";
import Button from "../../global/button";
export default function Discount() {
  const { t } = useTranslation();
  const s = "common:checkout.";
  return (
    <div>
      <TitleSection title={t("Discount")} className={style.title_policy} />
      <div className={style.accomodations_boxs}>
        <div className="d-flex align-center justify-space">
          <div className="d-flex align-center ">
            <Radio />
            <span>{t(s + "I want to donate charities.")}</span>
          </div>
          <div className={style.inp_submit}>
            <Input.inputWithSuffix
              placeholder={t(s + "Enter your coupon code")}
              suffix={
                <Button
                  className={style.submit_inp_btn}
                  content={<span>{t(s + "Submit")}</span>}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
