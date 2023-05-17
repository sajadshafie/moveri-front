import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Company() {
  const [data, setData] = useState([
    {
      image: "/main/company1.svg",
    },
    {
      image: "/main/company2.svg",
    },
    {
      image: "/main/company3.svg",
    },
    {
      image: "/main/company4.svg",
    },
  ]);
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div className="company-container">
      <p>
        {t(s + "Wir legen großen Wert auf Datenschutz und sichere Zahlungsmet")}
      </p>
      <div className="d-flex align-center">
        {data.map((v, i) => {
          return <img className="mr-2" key={i} src={v.image} alt="" />;
        })}
      </div>
    </div>
  );
}
