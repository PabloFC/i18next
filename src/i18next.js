import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n.use(Backend).use(languageDetector).use(initReactI18next).init({
  fallbackLng: "es",
});
