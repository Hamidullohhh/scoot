import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "./Languages/en";
import uz from "./Languages/uz";
import ru from "./Languages/ru";

const resources = {
  en: en,
  uz: uz,
  ru: ru,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
