import React from "react";
import style from "../../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
import Input from "../../global/input";
import ImgInlineTxt from "../../helper/imgInlineTxt";
export default function Wishes() {
  const { t } = useTranslation();
  const s = "common:checkout.";
  return (
    <div className={style.accomodations_boxs}>
      <ImgInlineTxt
        src={"/checkout/hamber.svg"}
        text={t(s + "Deine Wünsche")}
        classText={style.title_info}
        classImg="img-res"
      />
      <p>{t(s + "wishes_des")}</p>
      <Input.textArea className={style.text_area_info} />
    </div>
  );
}
