import React from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
const category = [
  {
    image: "/main/surf.svg",
    title: "Surfen",
    offer: "15",
  },
  {
    image: "/main/fitness.svg",
    title: "Fitness",
    offer: "15",
  },
  {
    image: "/main/yoga_img.svg",
    title: "Yoga",
    offer: "15",
  },
  {
    image: "/main/kamp.svg",
    title: "Kampfsport",
    offer: "15",
  },
];
// {
//   image: "/main/wandern.svg",
//   title: "Wandern",
//   offer: "15",
// },
export default function Discover() {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <section className={style.discover_container}>
      <h2 className={style.title_discover}>
        {t(s + "Entdecke Reisen für deine Sportart")}
      </h2>
      <div className="d-flex">
        <div className={style.box_category_item}>
          {category.map((v, i) => {
            return (
              <div key={i} className={style.discover_item_half}>
                <img src={v.image} alt="" />
                <div className={style.detail_offer}>
                  <h5 className={style.title_discover_item}>{v.title}</h5>
                  <span>{v.offer} offer</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.discover_item_full}>
          <img
            className={style.img_full_discover}
            src={"/main/wandern.svg"}
            alt=""
          />
          <div className={style.detail_offer}>
            <h5 className={style.title_discover_item}>{"Wandern"}</h5>
            <span>{"14"} offer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
