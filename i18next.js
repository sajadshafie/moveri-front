import i18next from "i18next";

import en_common from "./public/locales/en/main.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  defaultLanguage: "en",
  otherLanguages: ["en"],
  localeSubpaths: {
    en: "en",
    fa: "fa",
  },
  fallbackLng: "en",
  debug: true,
  resources: {
    en: {
      common: en_common,
    },
  },
});
export default i18next;
