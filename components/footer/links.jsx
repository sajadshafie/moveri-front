import React, { useState } from "react";
import Link from "next/link";
export default function Links() {
  const [data, setdata] = useState([
    {
      txt: "Reisemagazin",
      link: "/",
    },
    {
      txt: "Über uns",
      link: "/",
    },
    {
      txt: "Covid 19 Informationen",
      link: "/",
    },
    {
      txt: "Stornierungsbedingungen",
      link: "/",
    },
    {
      txt: "FAQs",
      link: "/",
    },
    {
      txt: "Partner werden",
      link: "/",
    },
    {
      txt: "Reiseschutz",
      link: "/",
    },
    {
      txt: "Geschenkgutscheine",
      link: "/",
    },
  ]);
  return (
    <div className="links-container">
      {data.map((v, i) => {
        return (
          <div className="d-flex align-center item-links">
            <div className="circle-links"></div>
            <Link href={v.link}>
              <a>
                <p className="txt-links">{v.txt}</p>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
