import React from "react";
import style from "../styles/main.module.css";
import Header from "../components/header/header";
import Sportat from "../components/main/sportart";
import Sectioncomminity from "../components/main/section_comminity";
import { useTranslation } from "react-i18next";
import Discover from "../components/main/discover";
import Destination from "../components/main/destination";
import Experience from "../components/main/exprience";
import Inspiration from "../components/main/Inspiration";
import PopularTravel from "../components/main/popularTravel";
import HolyDay from "../components/main/holyday";
import Traveler from "../components/main/travelers";
import NewMoveri from "../components/general/newMoveri";
import Logo from "../components/main/logo";
import Footer from "../components/footer/footer";
export default function Main() {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div>
      <Header />

      <main>
        <Sportat />
        <Sectioncomminity />
        <Discover />
        <Destination />
        <Experience />
        <Inspiration />
        <PopularTravel />
        <HolyDay />
        <Traveler />
        <NewMoveri />
        <Logo />
      </main>
      <Footer />
    </div>
  );
}
