import React from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import TitleSection from "../helper/titleSection";
import Input from "../global/input";
import Button from "../global/button";

export default function NewMoveri() {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div className={style.newMoveri_container}>
      <div style={{ margin: "150px 0" }}>
        <div className="d-flex align-center justify-center">
          <div className={style.f_46}>
            <div className="pos-rel">
              <img src="/main/new1.svg" alt="" />
              <img className={style.img_new2} src="/main/new2.svg" alt="" />
              <img src="/main/new3.svg" alt="" className={style.img_new3} />
            </div>
          </div>
          <div className={style.detail_newMoveri}>
            <TitleSection title={t(s + "Moverii Newletter")} />
            <p>{t(s + "new_des1")}</p>
            <p>{t(s + "new_des2")}</p>
            <Input.Input
              placeholder={t(s + "enter_email")}
              suffix={
                <Button
                  className={style.btn_read_more}
                  content={t(s + "submit")}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
