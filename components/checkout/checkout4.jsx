import React, { useState } from "react";
import style from "../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
import TitleSection from "./../helper/titleSection";
import RadioBoxPaymant from "./../checkoutComponents/payment/radioBoxPaymant";
import PaymantTotalBox from "./../checkoutComponents/payment/paymantTotalBox";
import Donation from "./../checkoutComponents/payment/donation";
import Discount from "./../checkoutComponents/payment/discount";
import Input from "../global/input";
import Button from "./../global/button";
import StepHandler from "./../checkoutComponents/stepHandler";

export default function Checkout4(props) {
  const { t } = useTranslation();
  const s = "common:checkout.";
  const [active, setActive] = useState("box1");
  return (
    <div className="mt-2">
      <TitleSection title={t(s + "Deine Wünsche")} />
      <p className="main-color">{t(s + "des_step1")}</p>
      <RadioBoxPaymant
        checked={active == "box1"}
        onClickBox={() => setActive("box1")}
        name={"paymant"}
        title={t(s + "Anzahlung und Restzahlung per Überweisung")}
        description={t(s + "radio_box_des1")}
      />
      <div className="my-3">
        <RadioBoxPaymant
          checked={active == "box2"}
          onClickBox={() => setActive("box2")}
          name={"paymant"}
          title={t(
            s +
              "Vollständige Zahlung per PayPal, Kredit-/ Debitkarte oder Sofortüberweisung"
          )}
          description={t(s + "radio_box_des2")}
        />
      </div>
      <div className="d-flex">
        <div className="mr-2">
          <TitleSection
            title={"Cancellation Policy"}
            className={style.title_policy}
          />
          <p className="main-color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
            euismod nisi porta lorem mollis Morbi tristique senectus et netus
            Mattis pellentesque id nibh tortor id aliquet lectus proin Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum.
          </p>
          <div className={` color-info ${style.info_paymant}`}>
            <h4 className={style.title_info_paymant}>
              {"Risk Free: FREE cancellation until Feb 9, 2022"}
            </h4>
            <p className="m-none my-1">{"You get a 100% refund."}</p>
            <p className="m-none">
              {"No questions asked. No strings attached."}
            </p>
          </div>
        </div>
        <div className={style.total_paymant}>
          <PaymantTotalBox />
        </div>
      </div>
      <div className="my-3">
        <Donation />
      </div>
      <div>
        <Discount />
      </div>
      <div className="mt-5">
        <div className="d-flex align-center mb-2">
          <Input.checkbox />
          <span className="ml-2">{t(s + "check_discount1")}</span>
        </div>
        <div className="d-flex align-center">
          <Input.checkbox />
          <span className="ml-2">{t(s + "check_discount2")}</span>
        </div>
      </div>
      <div className={style.final_pay}>
        <p>
          {t(s + "Pay Amount")} :<b>2692.00€</b>
        </p>
        <Button
          className={style.btn_final_pay}
          content={
            <div className="d-flex align-center justify-center">
              <span>{t(s + "Buchung Anfragen")}</span>
              <img src="/checkout/arrow_right.svg" alt="sadsd" />
            </div>
          }
        />
      </div>
      <StepHandler onNext={props.onNext} onBack={props.onBack} />
    </div>
  );
}
