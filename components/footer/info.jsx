import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Info() {
  const { t } = useTranslation();
  const s = "common:main.";
  const [data, setData] = useState([
    {
      image: "/main/call.svg",
      title: "Phone",
      number: "+49 (0)228 7638 2040",
    },
    {
      image: "/main/message.svg",
      title: "Email",
      number: "Team@Moverii.de",
    },
    {
      image: "/main/whatsapp.svg",
      title: "Whatsapp",
      number: "+49 (0)163 3122 260",
    },
  ]);
  return (
    <div className="box-info">
      <p>{t(s + "footer_info_1")}</p>
      <p>{t(s + "footer_info_2")}</p>
      {data.map((v, i) => {
        return (
          <div className="d-flex align-center mb-2">
            <div className="line-vertical"></div>
            <div className="d-flex align-center">
              <img className="icon-info" src={v.image} alt="" />
              <div>
                <span className="title-icon">{v.title}</span>
                <p className="m-none address-info">{v.number}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
