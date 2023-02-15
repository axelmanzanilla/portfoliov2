import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./translations/english.json";
import spanish from "./translations/spanish.json";

const resources = {
    en: { translation: english },
    es: { translation: spanish },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
