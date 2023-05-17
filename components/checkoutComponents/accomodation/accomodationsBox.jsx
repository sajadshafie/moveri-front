import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../../styles/checkout.module.css";
import InlinePrice from "./inlinePrice";

export default function AccomodationsBox() {
  const [data, setData] = useState([
    {
      image: "/checkout/acc1.svg",
      title: "Geteiltes 2-Bettzimmer im Localtesttttttingg",
      person: "2",
      room: "1",
      price: "82",
    },
    {
      image: "/checkout/acc2.svg",
      title: "Einzelzimmer im Hotel",
      person: "2",
      room: "2",
      price: "192",
    },
  ]);

  const { t } = useTranslation();
  const s = "common:checkout.";

  const handleRemoveAccomodation = (i) => {
    console.log(i, "remove");
  };

  return (
    <div className={style.accomodations_container}>
      <div className="space-between">
        <div className={style.box_blue}>
          <span className={style.title_blue_box}>Number of Night</span>
          <p className={`main-color m-none ${style.des_blue_box}`}>8 Nights</p>
        </div>
        <div className={style.box_blue}>
          <span className={style.title_blue_box}>Number of Guest</span>
          <p className={`main-color m-none ${style.des_blue_box}`}>6 Person</p>
        </div>
      </div>
      <h4 className={style.title_products}>Accommodations</h4>
      {data.map((v, i) => {
        return (
          <div
            key={i}
            className={
              data.length - 1 !== i ? style.acc_item_container : "d-flex"
            }
          >
            <div>
              <img src={v.image} alt="" />
            </div>
            <div className="flex-auto pl-1">
              <div className="d-flex justify-space">
                <div>
                  <p className={style.title_item_acc}>{v.title}</p>
                  <span className={style.size_color_sm}>
                    for{v.person} person
                  </span>
                </div>
                <img
                  className="remove-icon"
                  src="/remove_icon.svg"
                  alt=""
                  onClick={(e) => handleRemoveAccomodation(i)}
                />
              </div>
              <div className={`space-between mt-1`}>
                <span className={style.room_count}>{v.room} Room</span>
                <span className={style.price_acc}>{v.price}$</span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="my-4">
        <InlinePrice label={t(s + "Total")} price={"650$"} />
        <InlinePrice label={t(s + "Extra item")} price={"90€"} />
        <InlinePrice
          classLabel={style.discount_lable}
          classPrice={style.discount_price}
          label={t(s + "Dsicount")}
          price={"- 22€"}
        />
      </div>
      <div className={`space-between ${style.box_blue}`}>
        <p className="m-none">{t(s + "Pay Amount")}</p>
        <p className={`${style.price_total} m-none`}>{"692€"}</p>
      </div>
    </div>
  );
}
