import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

// utils
import { getLangName } from "../utils/getLangName";

const useLangSelect = () => {

    const { i18n } = useTranslation();

    const [isActive, setActive] = useState<boolean>(false)
    const [isLang, setLang] = useState<string>(getLangName(i18n.language))
    const [languageCode, setLanguageCode] = useState<string>(i18n.language)

    useEffect(() => {
        setLang(getLangName(i18n.language));
        setLanguageCode(i18n.language);
    }, [i18n.language]);

    const handleSelectLang = (value: string, code: string) => {
        if (code != '') {
            setLang(value)
            setActive(false)
            setLanguageCode(code)
            i18n.changeLanguage(code)
        }
    }

    const handleLangSelectController = () => {
        setActive(prev => !prev)
    }

    return {
        handleLangSelectController,
        handleSelectLang,
        isActive,
        isLang,
        languageCode
    }
}

export default useLangSelect