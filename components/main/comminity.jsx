import React from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Comminity(props) {
  const { t } = useTranslation();
  return (
    <section className={style.box_toturial}>
      <div className={style.icon_box}>
        <img src={props.src} alt="" />
      </div>
      <h5 className={style.title_item}>{props.title}</h5>
      <p className={style.des_item}>{props.description}</p>
      <Link href={props.link}>
        <a className={style.link_item}>
          <span
            className="main-color"
            style={{ paddingRight: "5px", cursor: "pointer" }}
          >
            {props.textLink}
          </span>
          <img src="/main/right_arrow_black.svg" alt="" />
        </a>
      </Link>
    </section>
  );
}
