import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../styles/checkout.module.css";
import StepHandler from "./../checkoutComponents/stepHandler";
import ExtrasItemBox from "./../checkoutComponents/extrasItem/extrasItemBox";
export default function Checkout2(props) {
  const [data, setData] = useState([
    {
      image: "/checkout/extras1.svg",
      title: "Daily Yoga Session",
      price: "82€ per session per person",
      description:
        "Für 1 Person: Dieses Zimmer befindet sich in einer der lokalen Unterkünfte, welche in der Stadt verteilt liegen. Dich erwarten zwei Einzelbetten sowie WLAN in deinem Zimmer. Das Badezimmer mit Dusche, ein Wohnzimmer und einen Fernseher teilst du dir mit bis zu vier weiteren Teilnehmern.",
    },
    {
      image: "/checkout/extras2.svg",
      title: "Transportation",
      price: "12€ per session",
      description:
        "Für 1 Person: Dieses Zimmer befindet sich in einer der lokalen Unterkünfte, welche in der Stadt verteilt liegen. Dich erwarten zwei Einzelbetten sowie WLAN in deinem Zimmer. Das Badezimmer mit Dusche, ein Wohnzimmer und einen Fernseher teilst du dir mit bis zu vier weiteren Teilnehmern.",
    },
    {
      image: "/checkout/extras3.svg",
      title: "Dinner",
      price: "30€ per person per night",
      description:
        "Für 1 Person: Dieses Zimmer befindet sich in einer der lokalen Unterkünfte, welche in der Stadt verteilt liegen. Dich erwarten zwei Einzelbetten sowie WLAN in deinem Zimmer. Das Badezimmer mit Dusche, ein Wohnzimmer und einen Fernseher teilst du dir mit bis zu vier weiteren Teilnehmern.",
    },
    {
      image: "/checkout/extras4.svg",
      title: "Massage",
      price: "45€ per person per massage",
      description:
        "Für 1 Person: Dieses Zimmer befindet sich in einer der lokalen Unterkünfte, welche in der Stadt verteilt liegen. Dich erwarten zwei Einzelbetten sowie WLAN in deinem Zimmer. Das Badezimmer mit Dusche, ein Wohnzimmer und einen Fernseher teilst du dir mit bis zu vier weiteren Teilnehmern.",
    },
    {
      image: "/checkout/extras5.svg",
      title: "Pool",
      price: "82€ per session per person",
      description:
        "Für 1 Person: Dieses Zimmer befindet sich in einer der lokalen Unterkünfte, welche in der Stadt verteilt liegen. Dich erwarten zwei Einzelbetten sowie WLAN in deinem Zimmer. Das Badezimmer mit Dusche, ein Wohnzimmer und einen Fernseher teilst du dir mit bis zu vier weiteren Teilnehmern.",
    },
  ]);
  const { t } = useTranslation();
  const s = "common:checkout.";
  return (
    <div className="mt-3">
      <p>{t(s + "extras_des")}</p>
      {data.map((v, i) => {
        return <ExtrasItemBox data={v} index={i} />;
      })}
      <StepHandler onNext={props.onNext} onBack={props.onBack} />
    </div>
  );
}
