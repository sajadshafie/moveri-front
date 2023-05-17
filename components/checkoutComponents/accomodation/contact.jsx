import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../../styles/checkout.module.css";
import ImgInlineTxt from "./../../helper/imgInlineTxt";

export default function Contact() {
  const { t } = useTranslation();
  const s = "common:checkout.";
  return (
    <div className={`${style.accomodations_container} my-2`}>
      <h3 className={`main-color ${style.title_contact}`}>
        {t(s + "contact")}
      </h3>
      <p className="main-color fw-600">{t(s + "contact_des")}</p>
      <div className="d-flex align-center">
        <div className={"mr-1"}>
          <img
            className={style.img_contact}
            src="/checkout/contact.svg"
            alt=""
          />
        </div>
        <div className="mt-2">
          <div className="mb-sm">
            <ImgInlineTxt
              src={"/checkout/social1.svg"}
              text={"+49 (0)228 7638 2040"}
            />
          </div>
          <div className="mb-sm">
            <ImgInlineTxt
              src={"/checkout/social2.svg"}
              text={"Team@Moverii.de"}
            />
          </div>
          <div className="mb-sm">
            <ImgInlineTxt
              src={"/checkout/social3.svg"}
              text={"+49 (0)163 3122 260"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
