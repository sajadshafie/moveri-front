import React, { useState } from "react";
import style from "../../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import TitleSection from "../../helper/titleSection";
export default function Travel() {
  const [card, setCard] = useState([
    {
      name: "Fabi",
      star: "5",
      date: "25.05.2022",
      description:
        "Wenn ihr nach Portugal reist und Surfen lernen wollt, seid ihr im Estela Surf Hostel bestens aufgehoben. Die Hosts Marco und Rachel sind super herzlich und gastfreundlich. Betonen möchte ich auch die Sauberkeit der Unterkunft. Wir haben noch nie so ein sauberes Hostel gesehen. Wir freuen uns schon auf den nächsten Besuch! :)",
      offer: "Erholsame Yoga-Auszeit in der Chiemgauer Bergwelt",
      image: "/main/travel1.svg",
    },
    {
      name: "Paula",
      star: "5",
      date: "25.05.2022",
      description:
        "Sehr sauber, tolle Atmosphäre, super Lage direkt am Strand, mega Blick aufs Meer von der Dachterasse und nette Gäste :)",
      offer: "Umgeben von Natur:Surfurlaub im entspannten Sagres",
      image: "/main/travel2.svg",
    },
    {
      name: "Melina",
      star: "5",
      date: "25.05.2022",
      description:
        "Einfach klasse! Daniel von moverii hat mir super bei der kurzfristigen Reiseplanung weitergeholfen. Das Hostel lag direkt am Strand, das Team dort war super nett und hilfsbereit und die surfstunden haben auch Spaß gemacht. Sehr verdiente 5 Sterne!",
      offer: "Surfcamp in Westfrankreich: Surfen weit weg vom Trubel",
      image: "/main/travel3.svg",
    },
  ]);
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div className={style.travel_pos}>
      <TitleSection
        title={t(s + "Das sagen Reisende über ihren Surfurlaub in Europa")}
      />
      <div className={style.travel_container}>
        {card.map((v, i) => {
          return (
            <div className={style.card_travel}>
              <div className="space-between">
                <div className="d-flex align-center">
                  <h6 className="m-none pr-1">{v.name}</h6>
                  <img src={"/main/star_yellow.svg"} alt="" />
                  <img src={"/main/star_yellow.svg"} alt="" />
                  <img src={"/main/star_yellow.svg"} alt="" />
                  <img src={"/main/star_yellow.svg"} alt="" />
                  <img src={"/main/star_yellow.svg"} alt="" />
                </div>
                <div className="d-flex align-center">
                  <img className="pr-1" src={"/main/date_gray.svg"} alt="" />
                  <span>{v.date}</span>
                </div>
              </div>
              <p className={style.des_travel}>{v.description}</p>
              <div className={style.line_gray}></div>
              <div className="space-between">
                <img className="pr-2" src={v.image} alt="" />
                <p className="m-none">{v.offer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
