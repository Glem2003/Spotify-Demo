import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

(async () => {
    await i18n
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: "en", // 預設語言
            debug: true,
            interpolation: { escapeValue: false },
            detection: {
                order: ["localStorage", "cookie", "navigator"], // 語言偵測順序
                caches: ["localStorage", "cookie"], // 把語言設定存入 localStorage 和 cookie
            },
        });

})();

export default i18n;
